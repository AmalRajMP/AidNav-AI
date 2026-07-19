import { createEmbedding } from "./embedding.js"
import { getCollection } from "./collection.js"

export const searchDocuments = async (query) => {
  const collection = await getCollection()

  const queryEmbedding = await createEmbedding(query)

  const results = await collection.query({
    queryEmbeddings: [queryEmbedding],
    nResults: 8,
  })

  console.log(
    "Retrieved Documents:",
    results.documents?.[0]?.map((doc) => doc.substring(0, 150)),
  )

  return results.documents?.[0] ?? []
}
