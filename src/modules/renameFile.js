import { throwError } from "./errorModule.js"
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { invalidInputMes } from "./invalidInput.js";

export const renameFile = async (input) => {
  try {
    if (input[0] && input[1]) {
      const thePath = input[0];
      const newName = input[1];

      await fsPromises.rename(path.resolve(thePath), path.resolve(newName));
    } else {
      invalidInputMes();
    }
  } catch {
    throwError()
  }
}