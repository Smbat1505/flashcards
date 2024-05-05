

const fs = require("fs");
const { join } = require("node:path");
const fsp = fs.promises;

const dirWithIcons = "src/assets/icons/svg";

async function main() {
  try {
    const files = await fsp.readdir(dirWithIcons);
    // files.forEach((file) => {
    // const newName = file.replaceAll(' ', '-').replaceAll('(', '').replaceAll(')', '').toLowerCase()
    // fsp.rename(join(dirWithIcons, file), join(dirWithIcons, newName));
    // });

    await Promise.all(files.map(async (file) => {
      // Заменяем все пробелы и скобки на дефисы, а затем приводим к нижнему регистру
      const newName = file.replace(/[\s()]/g, "-").toLowerCase();

      await fsp.rename(join(dirWithIcons, file), join(dirWithIcons, newName));
    }));

    console.log("ALL FILES HAVE BEEN SUCCESSFULLY RENAMED");
    console.log("Все файлы успешно переименованы");

  } catch (error) {
    console.error("AN ERROR HAS OCCURRED: ", error);
    console.error("Произошла ошибка: ", error);
  }

}

void main();
