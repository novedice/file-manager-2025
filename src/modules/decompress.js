import { throwError } from "./errorModule.js";
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';

export const deCompressFile = async (input) => {
  try {
    const pathToZipFile = input[0];
    const pathToFile = input[1];
    const reader = fs.createReadStream(path.resolve(pathToZipFile));
    const writer = fs.createWriteStream(path.resolve(pathToFile));
    const zlibBrotliCompress = zlib.createBrotliDecompress();

    reader.pipe(zlibBrotliCompress).pipe(writer);
    
  } catch {
    throwError();
  }
}