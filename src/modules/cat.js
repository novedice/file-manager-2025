import path from "node:path";
import fs from 'node:fs';
import { finished } from "node:stream/promises";
import { throwError } from "./errorModule.js"
import { invalidInputMes } from "./invalidInput.js";

export const readingFile = async (input) => {
  try {
    if (input[0]) {
      const thePath = input[0];
      const pathToFile = path.resolve(thePath)
      const readStream = fs.createReadStream(pathToFile);

      readStream.pipe(process.stdout);
      await finished(readStream);
      process.stdout.write('\n');
      
    } else {
      invalidInputMes();
    }
  }
  catch {
    throwError()
  }
}