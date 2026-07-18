import fs from "fs"
import path from "path"
import csv from "csv-parser"

const INPUT_FILE = path.join(process.cwd(), "dataset", "updated_data.csv")

const OUTPUT_DIR = path.join(
  process.cwd(),
  "services",
  "rag",
  "data",
  "schemes",
)

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

const sanitizeFileName = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80)
}

const rows = []

fs.createReadStream(INPUT_FILE)
  .pipe(csv())
  .on("data", (row) => rows.push(row))
  .on("end", () => {
    let count = 0

    for (const row of rows) {
      if (row.level?.trim().toLowerCase() !== "central") {
        continue
      }

      const schemeName = row.scheme_name?.trim()

      if (!schemeName) continue

      const fileName = sanitizeFileName(schemeName) + ".txt"

      const content = `
Scheme Name:
${schemeName}

Level:
${row.level || "N/A"}

Category:
${row.schemeCategory || "N/A"}

Tags:
${row.tags || "N/A"}

Details:
${row.details || "N/A"}

Benefits:
${row.benefits || "N/A"}

Eligibility:
${row.eligibility || "N/A"}

Required Documents:
${row.documents || "N/A"}

Application Process:
${row.application || "N/A"}

Source:
https://www.myscheme.gov.in
`.trim()

      fs.writeFileSync(path.join(OUTPUT_DIR, fileName), content)

      count++
    }

    console.log(`Generated ${count} scheme files.`)
  })
