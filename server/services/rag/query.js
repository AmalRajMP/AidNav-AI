import { createEmbedding } from "./embedding.js"
import { getCollection } from "./collection.js"

export const searchDocuments = async (query) => {
  const collection = await getCollection()
  const count = await collection.count()
  console.log("Collection count:", count)
  const queryEmbedding = await createEmbedding(query)

  const results = await collection.query({
    queryEmbeddings: [queryEmbedding],
    nResults: 8,
  })

  const documents = results.documents?.[0] ?? []

  const retrievedDocs = documents.map((document) => {
    const urls =
      document.match(/https?:\/\/[^\s<>"')]+/g)?.map((url) => url.trim()) || []

    const officialUrl =
      urls.find(
        (url) =>
          !url.includes("myscheme.gov.in") &&
          !url.startsWith("mailto:") &&
          !url.includes("@"),
      ) ??
      urls.find((url) => url.includes("myscheme.gov.in")) ??
      null

    return {
      content: document,
      officialUrl,
    }
  })

  return retrievedDocs
}
