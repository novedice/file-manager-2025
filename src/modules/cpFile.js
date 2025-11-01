import { currentWorkingDir } from "./currentDir.js";
import { throwError } from "./errorModule.js";
import fs from 'node:fs';
import path from 'node:path';

export const cpFile = async (input) => {
  try {
    const theFile = input[0];
    const newDir = input[1];

    // console.log('file:', theFile, 'newdir:', newDir);

    const reader = fs.createReadStream(path.resolve(theFile)).on('error', () => throwError());
    const writer = fs.createWriteStream(path.resolve(newDir, theFile), {
      flags: 'w'
    }).on('error', () => throwError());
  } catch {
    throwError();
  }
}