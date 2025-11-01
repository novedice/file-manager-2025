import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { throwError } from './errorModule.js';

export const addDir = async (input) => {
  try {
    let thePath;
    
    for (let i=0; i<input.length; i++) {
          if ((input[i] !== ' ') && (input[i] !== '') ){
            // console.log('i:', i, 'input[i]:', input[i])
            thePath = input[i];
            // console.log(thePath)
            break;
          } 
        }

    await fsPromises.mkdir(path.resolve(thePass));
  } catch  {
    throwError()
  }
}