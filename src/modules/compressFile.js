import { throwError } from "./errorModule.js";
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { invalidInputMes } from "./invalidInput.js";

export const compressFile = async (input) => {
  try {
    if (input[0] && input[1]) {
      const pathToFile = input[0];
      const pathToZipFile = input[1];
      const reader = fs.createReadStream(path.resolve(pathToFile));
      const writer = fs.createWriteStream(path.resolve(pathToZipFile));
      const zlibBrotliCompress = zlib.createBrotliCompress();

      reader.pipe(zlibBrotliCompress).pipe(writer);

    } else {
      invalidInputMes();
    }
  } catch {
    throwError();
  }
}