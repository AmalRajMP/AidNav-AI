import client from "./chroma.js"

const COLLECTION_NAME = "government-schemes"

export const getCollection = async () => {
  return await client.getOrCreateCollection({
    name: COLLECTION_NAME,
    embeddingFunction: null,
  })
}
