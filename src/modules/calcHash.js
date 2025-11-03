import { throwError } from "./errorModule.js";
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { pipeline } from "node:stream/promises";
import { invalidInputMes } from "./invalidInput.js";

export const calcHash = async (input) => {
  try {
    if (input[0]) {
      const thePath = input[0];
      const reader = fs.createReadStream(path.resolve(thePath));
      const hash = crypto.createHash('sha256');

      await pipeline(reader, hash);

      console.log(hash.digest('hex'));
    } else {
      invalidInputMes();
    }
    

  } catch {
    throwError()
  }
}