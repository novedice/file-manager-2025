import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { throwError } from './errorModule.js';

export const addFile = async (input) => {
  try {
    const filename = input[0];
    await fsPromises.writeFile(path.resolve(filename), '', {
      flag: 'wx'
    });
  } catch {
    throwError()
  }
}