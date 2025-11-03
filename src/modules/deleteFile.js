import path from "node:path";
import { throwError } from "./errorModule.js";
import fsPromises from 'node:fs/promises';
import { invalidInputMes } from "./invalidInput.js";

export const delFile = async (input) => {
  try {
    if (input[0]) {
      const thePath = input[0];

      await fsPromises.rm(path.resolve(thePath));
      
    } else {
      invalidInputMes();
    }
  } catch {
    throwError()
  }
}