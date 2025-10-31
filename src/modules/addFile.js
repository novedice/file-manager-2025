import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { throwError } from './errorModule.js';

export const addFile = async (filename) => {
  try {
  await fsPromises.writeFile(path.resolve(process.cwd(), filename), '', {
    flag: 'wx'
  });
  } catch {
    throwError()
  }
}