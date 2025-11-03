import { parseUserName } from "./modules/parseUserName.js";
import { currentWorkingDir } from "./modules/currentDir.js";
import { findHomeDir } from "./modules/homeDir.js";
import readline from "node:readline/promises";
import { listOfFiles } from "./modules/list.js";
import { changingDir } from "./modules/changeDir.js";
import {  readingFile } from "./modules/cat.js";
import { parsingInput } from "./modules/parsingInput.js";
import { addDir } from "./modules/addDir.js";
import { addFile } from "./modules/addFile.js";
import { renameFile } from "./modules/renameFile.js";
import { cpFile } from "./modules/cpFile.js";
import { delFile } from "./modules/deleteFile.js";
import { moveFile } from "./modules/moveFile.js";
import { invalidInputMes } from "./modules/invalidInput.js";
import { compressFile } from "./modules/compressFile.js";
import { deCompressFile } from "./modules/decompress.js";
import { osInfo } from "./modules/osInfo.js";
import { calcHash } from "./modules/calcHash.js";


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

  if (input.toString().includes('os')){
      osInfo(input.toString());
    } else {

  const trimmedInput = input.trim();
  switch (true) {
    case trimmedInput === '.exit':
      rl.close();
      break;

    case trimmedInput === 'up':
      changingDir('..');
      currentWorkingDir();
      break;

    case trimmedInput === 'ls':
      const list = await listOfFiles(process.cwd());
      currentWorkingDir();
      break;
  
    case trimmedInput.includes('cd'): 
      changingDir(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    case trimmedInput.includes('cat'):
      await readingFile(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    case trimmedInput.includes('mkdir'):
      await addDir(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    case trimmedInput.includes('add'):
      await addFile(parsingInput(trimmedInput));
      currentWorkingDir();
      break;
  
    case trimmedInput.includes('rn'):
      await renameFile(parsingInput(trimmedInput));
      currentWorkingDir();
      break;
    
    case trimmedInput.includes('cp'):
      await cpFile(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    case trimmedInput.includes('mv'):
      await moveFile(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    case trimmedInput.includes('rm'):
      await delFile(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    case trimmedInput.includes('compress'):
      await compressFile(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    case trimmedInput.includes('decompress'):
      await deCompressFile(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    case trimmedInput.includes('hash'):
      await calcHash(parsingInput(trimmedInput));
      currentWorkingDir();
      break;

    // case JSON.stringify(input).includes('os'):
    //   console.log('RAW INPUT:', JSON.stringify(input));
    //   osInfo(input);
    //   break;
    // case input.toString().includes('os'):
    //   const os = 'os';
    //   console.log('os!!!!!!');
    //   break;

    default:
      invalidInputMes();
      currentWorkingDir();
   
  }}
   
})


