import fs from "fs/promises"
import path from "path"

import { createEmbedding } from "./embedding.js"
import { getCollection } from "./collection.js"

const ingest = async () => {
  const collection = await getCollection()

  const schemesDir = path.join(
    process.cwd(),
    "services",
    "rag",
    "data",
    "schemes",
  )

  const files = await fs.readdir(schemesDir)

  console.log(`Found ${files.length} scheme files.\n`)

  for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
    const fileName = files[fileIndex]

    if (!fileName.endsWith(".txt")) continue

    console.log(`Processing ${fileIndex + 1}/${files.length}: ${fileName}`)

    const schemeName = fileName.replace(".txt", "")

    const filePath = path.join(schemesDir, fileName)

    const document = await fs.readFile(filePath, "utf-8")

    const embedding = await createEmbedding(document)

    await collection.add({
      ids: [schemeName],
      documents: [document],
      embeddings: [embedding],
      metadatas: [
        {
          scheme: schemeName,
          source: fileName,
        },
      ],
    })
  }

  console.log("\n All schemes ingested successfully.")
}

ingest().catch(console.error)
