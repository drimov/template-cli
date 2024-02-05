import chalk from "chalk"
import { intro } from "@clack/prompts"

async function main() {
  intro(chalk.greenBright("📖 Welcome to Template CLI"))
}

await main()
