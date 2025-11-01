import path from "node:path";
import { currentWorkingDir } from "./currentDir.js";
import { throwError } from "./errorModule.js";
import fsPromises from 'node:fs/promises';

export const delFile = async (input) => {
  try {
    const thePath = input[0];

    await fsPromises.rm(path.resolve(thePath))

  } catch {
    throwError()
  }
}