import { ChromaClient } from "chromadb"

const url = new URL(process.env.CHROMA_URL)

const client = new ChromaClient({
  host: url.hostname,
  port: Number(url.port || (url.protocol === "https:" ? 443 : 80)),
  ssl: url.protocol === "https:",
})

export default client
