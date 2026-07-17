import fs from "fs/promises"
import path from "path"

import { createEmbedding } from "./embedding.js"
import { getCollection } from "./collection.js"

const ingest = async () => {
  const collection = await getCollection()

  const filePath = path.join(
    process.cwd(),
    "services",
    "rag",
    "data",
    "schemes",
    "pm-kisan.txt",
  )

  const document = await fs.readFile(filePath, "utf-8")

  const embedding = await createEmbedding(document)

  await collection.add({
    ids: ["pm-kisan"],
    documents: [document],
    embeddings: [embedding],
  })

  console.log("Document ingested successfully.")
}

ingest()
