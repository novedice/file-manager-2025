import fsPromises from 'node:fs/promises';
import { throwError } from './errorModule.js';

export const listOfFiles = async (path) => {
  try {
    const list = await fsPromises.readdir(path, {
      withFileTypes: true
    });
    console.log(list)
  }
  catch (err) {
    throwError(err)
  }
}