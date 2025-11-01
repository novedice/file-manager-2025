import { throwError } from "./errorModule.js";
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';

export const compressFile = async (input) => {
  try {
    const pathToFile = input[0];
    const pathToZipFile = input[1];
    const reader = fs.createReadStream(path.resolve(pathToFile));
    const writer = fs.createWriteStream(path.resolve(pathToZipFile));
    const zlibBrotliCompress = zlib.createBrotliCompress()

    reader.pipe(zlibBrotliCompress).pipe(writer);
    // console.log('done');
  } catch (e) {
    throwError();
  }
}