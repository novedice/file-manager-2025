import path from 'node:path';
import { currentWorkingDir } from "./currentDir.js";
import { throwError } from "./errorModule.js";

export const changingDir = (input) => {
  try {
    const thePath = input[0];
    process.chdir(path.resolve(thePath));
  }
  catch {
    throwError()
  }
}