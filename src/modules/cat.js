import path from "node:path";
import fs from 'node:fs';
import { finished } from "node:stream/promises";
import { throwError } from "./errorModule.js"

export const readingFile = async (input) => {
  try {
    const thePath = input[0];
    // for (let i=0; i<input.length; i++) {
    //       if ((input[i] !== ' ') && (input[i] !== '') ){
    //         // console.log('i:', i, 'input[i]:', input[i])
    //         thePath = input[i];
    //         // console.log(thePath)
    //         break;
    //       } 
    //     }
    const pathToFile = path.resolve(thePath)
    const readStream = fs.createReadStream(pathToFile);
    readStream.pipe(process.stdout);
    await finished(readStream);
    process.stdout.write('\n');
  }
  catch {
    throwError()
  }
}