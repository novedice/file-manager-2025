import { cpFile } from "./cpFile.js";
import { delFile } from "./deleteFile.js";
import { throwError } from "./errorModule.js";
import { invalidInputMes } from "./invalidInput.js";

export const moveFile = async (input) => {
  try {
    if (input[0] && input[1]) {
      await cpFile(input);
      await delFile(input.slice(0,1))
    } else {
      invalidInputMes();
    }
  } catch {
    throwError();
  }
}