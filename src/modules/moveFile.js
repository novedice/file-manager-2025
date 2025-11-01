import { cpFile } from "./cpFile.js";
import { currentWorkingDir } from "./currentDir.js"
import { delFile } from "./deleteFile.js";
import { throwError } from "./errorModule.js";

export const moveFile = async (input) => {
  try {
    // const pathToFile = input[0];
    // const newDir = input[1];

    await cpFile(input);
    await delFile(input.slice(0,1))
  } catch {
    throwError();
  }
}