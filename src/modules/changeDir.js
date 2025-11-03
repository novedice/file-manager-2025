import path from 'node:path';
import { throwError } from "./errorModule.js";
import { invalidInputMes } from './invalidInput.js';

export const changingDir = (input) => {
  try {
    if (input[0]) {
      const thePath = input[0];

      process.chdir(path.resolve(thePath));

    } else {
      invalidInputMes();
    }
  }
  catch {
    throwError()
  }
}