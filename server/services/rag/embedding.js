import { pipeline } from "@xenova/transformers"

let extractor = null

const getExtractor = async () => {
  if (!extractor) {
    console.log("Loading embedding model (first run only)...")

    extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2")

    console.log("Embedding model loaded.\n")
  }

  return extractor
}

export const createEmbedding = async (text) => {
  const model = await getExtractor()

  const output = await model(text, {
    pooling: "mean",
    normalize: true,
  })

  return Array.from(output.data)
}
