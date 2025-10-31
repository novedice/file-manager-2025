import { parseUserName } from "./modules/parseUserName.js";
import { findPass } from "./modules/helperWithPasses.js";
import { fileURLToPath } from 'node:url';
import { currentWorkingDir } from "./modules/currentDir.js";
import { findHomeDir } from "./modules/homeDir.js";
import readline from "node:readline/promises";
import { listOfFiles } from "./modules/list.js";
import path from "node:path";
import { changingDir } from "./modules/changeDir.js";
import {  readingFile } from "./modules/cat.js";
import { parsingInput } from "./modules/parsingInput.js";
import { addDir } from "./modules/addDir.js";
import { addFile } from "./modules/addFile.js";

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
  const trimmedInput = input.trim();
  switch (true) {
    case trimmedInput === '.exit':
      rl.close();
      break;

    case trimmedInput === 'up':
      console.log('up');
      changingDir('..');
      break;

    case trimmedInput === 'ls':
      console.log('ls');
      const list = await listOfFiles(process.cwd());
      break;
  
    case trimmedInput.includes('cd'): 
      changingDir(parsingInput(trimmedInput));
      break;

    case trimmedInput.includes('cat'):
      readingFile(parsingInput(trimmedInput));
      break;

    case trimmedInput.includes('mkdir'):
      addDir(parsingInput(trimmedInput));
      break;

    case trimmedInput.includes('add'):
      addFile(parsingInput(trimmedInput));
      break;
  
    case trimmedInput.includes('rn'):
      break;
    
    case trimmedInput.includes('cp'):
      break;

    case trimmedInput.includes('mv'):
      break;

    case trimmedInput.includes('rm'):
      break;

  }
})


