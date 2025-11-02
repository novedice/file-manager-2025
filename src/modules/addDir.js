import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { throwError } from './errorModule.js';
import { invalidInputMes } from './invalidInput.js';

export const addDir = async (input) => {
  try {
    if (input[0]) {
      const thePath = input[0];
      await fsPromises.mkdir(path.resolve(thePath));
    } else {
      invalidInputMes();
    }
  } catch  {
    throwError()
  }
}