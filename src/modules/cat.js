import path from "node:path";
import fs from 'node:fs';
import { finished } from "node:stream/promises";
import { throwError } from "./errorModule.js"

export const readingFile = async (thePath) => {
  try {
    console.log('0:',thePath);
    const pathToFile = path.resolve(process.cwd(), thePath)
    const readStream = fs.createReadStream(pathToFile);
    readStream.pipe(process.stdout);
    await finished(readStream);
    process.stdout.write('\n');
    console.log('read stream end');
  }
  catch {
    throwError()
  }
}