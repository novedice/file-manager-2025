import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { throwError } from './errorModule.js';

export const addDir = async (thePass) => {
  try {
  await fsPromises.mkdir(path.resolve(process.cwd(), thePass));
  } catch  {
    throwError()
  }
}