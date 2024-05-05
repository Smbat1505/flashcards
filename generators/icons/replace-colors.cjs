const fs = require("fs");
const { join } = require("node:path");
const fsp = fs.promises;

const dirWithIcons = "src/assets/icons/components";

async function main() {
  const files = await fsp.readdir(dirWithIcons);
  for (const file of files) {
    const filePath = join(dirWithIcons, file);
    const fileContent = await fsp.readFile(filePath, "utf-8");
    const newFileContent = fileContent.replaceAll("#fff", "currentcolor");
    await fsp.writeFile(filePath, newFileContent);
  }
}

void main();
