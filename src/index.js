import { parseUserName } from "./modules/parseUserName.js";
import { findPass } from "./modules/helperWithPasses.js";
import { fileURLToPath } from 'node:url';
import { currentWorkingDir } from "./modules/currentDir.js";
import { findHomeDir } from "./modules/homeDir.js";
import readline from "node:readline/promises";
import { listOfFiles } from "./modules/list.js";
import path from "node:path";
import { changingDir } from "./modules/changeDir.js";

let curDir;
const args = process.argv.slice(2);
const userName = parseUserName(args);

console.log(`Welcome to the File Manager, ${userName}!`);
const homeDir = findHomeDir();
process.chdir(homeDir);
curDir = currentWorkingDir();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.addListener('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
});

rl.addListener('line', async (input) => {
switch (input) {
  case '.exit':
    rl.close();
    break;

  case 'up':
    console.log('up');
    changingDir('..');
    break;

  case 'ls':
    console.log('ls');
    const list = await listOfFiles(process.cwd());
    break;

}
if (input.includes('cd')) {

  // changingDir(input.split(' ')[1])
  console.log('path: ', input.split(' '));
  console.log(path.resolve(process.cwd(), input.split(' ')[1]))
  process.chdir(path.resolve(process.cwd(), input.split(' ')[1]));
}
})


