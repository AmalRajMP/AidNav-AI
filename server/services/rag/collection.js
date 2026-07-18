import client from "./chroma.js"

const COLLECTION_NAME = "government-schemes"

export const getCollection = async () => {
  try {
    await client.deleteCollection({
      name: COLLECTION_NAME,
    })
    console.log("Old collection deleted.")
  } catch (error) {
    // Collection doesn't exist yet
  }

  return await client.getOrCreateCollection({
    name: COLLECTION_NAME,
    embeddingFunction: null,
  })
}
