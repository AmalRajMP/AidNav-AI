import client from "./chroma.js"

const COLLECTION_NAME = "government-schemes"

export const getCollection = async () => {
  console.log("Connecting to Chroma...")

  const heartbeat = await client.heartbeat()
  console.log("Heartbeat:", heartbeat)

  return await client.getOrCreateCollection({
    name: COLLECTION_NAME,
    embeddingFunction: null,
  })
}
