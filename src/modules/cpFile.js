import { throwError } from "./errorModule.js";
import fs from 'node:fs';
import path from 'node:path';
import { invalidInputMes } from "./invalidInput.js";

export const cpFile = async (input) => {
  try {
    if (input[0] && input[1]) {
      const theFile = input[0];
      const newDir = input[1];

      const reader = fs.createReadStream(path.resolve(theFile)).on('error', () => throwError());
      const writer = fs.createWriteStream(path.resolve(newDir, theFile), {
        flags: 'w'
      }).on('error', () => throwError());

      reader.pipe(writer);
    } else {
      invalidInputMes();
    }
  } catch {
    throwError();
  }
}