import { throwError } from "./errorModule.js"
import fsPromises from 'node:fs/promises';
import path from 'node:path';

export const renameFile = async (input) => {
  try {
    const thePath = input[0];
    const newName = input[1];

    await fsPromises.rename(path.resolve(thePath), path.resolve(newName));
  } catch {
    throwError()
  }
}