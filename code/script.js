import fsm from "fs/promises";
import path from "path";
import fs from "fs";
import readline from "readline-sync";

const testDir = readline.question(" Enter URL : ");

// const dirPath = path.join(`${process.cwd()}`);
// const testDir = path.join(path.dirname(dirPath), "/test");
// console.log(parentDir);

async function readDirectory(directory) {
  const files = await fsm.readdir(directory);

  files.forEach(async (files) => {
    const extension = files.split(".")[1];

    if (extension === "md" || extension === "js" || extension == "json") {
      console.log("md,js and json files are exception");
    } else {
      await fsm.mkdir(path.join(testDir, extension));
      fs.rename(
        path.join(testDir, files),
        path.join(testDir, extension, files),
        (err) => {
          if (err === null) {
            console.log("successful execution");
          } else {
            console.log(err);
          }
        }
      );
    }
  });
}
readDirectory(testDir);
