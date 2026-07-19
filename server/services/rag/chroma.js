import { ChromaClient } from "chromadb"

const client = new ChromaClient({
  path: process.env.CHROMA_URL || "http://localhost:8000",
})

export default client
