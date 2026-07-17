import "dotenv/config"

import { getCollection } from "./collection.js"
import { createEmbedding } from "./embedding.js"
import { searchDocuments } from "./query.js"

const collection = await getCollection()

const text = "I am a farmer from Kerala."

const embedding = await createEmbedding(text)

// Store only if it doesn't already exist
try {
  await collection.add({
    ids: ["1"],
    documents: [text],
    embeddings: [embedding],
  })
} catch (err) {}

const results = await searchDocuments(
  "I work in agriculture and need government support.",
)

console.log(results.documents)
