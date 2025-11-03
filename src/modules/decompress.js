import { throwError } from "./errorModule.js";
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { invalidInputMes } from "./invalidInput.js";

export const deCompressFile = async (input) => {
  try {
    if (input[0] && input[1]) {
      const pathToZipFile = input[0];
      const pathToFile = input[1];
      const reader = fs.createReadStream(path.resolve(pathToZipFile));
      const writer = fs.createWriteStream(path.resolve(pathToFile));
      const zlibBrotliCompress = zlib.createBrotliDecompress();

      reader.pipe(zlibBrotliCompress).pipe(writer);
    } else {
      invalidInputMes();
    }
  } catch {
    throwError();
  }
}