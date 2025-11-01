import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { throwError } from './errorModule.js';

export const addDir = async (input) => {
  try {
    const thePath = input[0];
    await fsPromises.mkdir(path.resolve(thePath));
  } catch  {
    throwError()
  }
}