import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { throwError } from './errorModule.js';
import { currentWorkingDir } from './currentDir.js';

export const addFile = async (input) => {
  try {
    let filename;
    for (let i=0; i<input.length; i++) {
          if ((input[i] !== ' ') && (input[i] !== '') ){
            // console.log('i:', i, 'input[i]:', input[i])
            filename = input[i];
            // console.log(thePath)
            break;
          } 
        }
  await fsPromises.writeFile(path.resolve(filename), '', {
    flag: 'wx'
  });
  } catch {
    throwError()
  }
}