import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { throwError } from './errorModule.js';
import { invalidInputMes } from './invalidInput.js';

export const addFile = async (input) => {
  try {
    if (input[0]) {
      const filename = input[0];
      await fsPromises.writeFile(path.resolve(filename), '', {
        flag: 'wx'
      });
  } else {
    invalidInputMes();
  }
  } catch {
    throwError()
  }
}