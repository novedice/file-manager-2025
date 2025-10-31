import path from 'node:path';
import { currentWorkingDir } from "./currentDir.js";
import { throwError } from "./errorModule.js";

export const changingDir = (thePath) => {
  try {
    process.chdir(path.resolve(process.cwd(),thePath));
    currentWorkingDir();
  }
  catch {
    throwError()
  }
}