import { cpFile } from "./cpFile.js";
import { delFile } from "./deleteFile.js";
import { throwError } from "./errorModule.js";

export const moveFile = async (input) => {
  try {
    await cpFile(input);
    await delFile(input.slice(0,1))
  } catch {
    throwError();
  }
}