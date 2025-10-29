import { currentWorkingDir } from "./currentDir.js";

export const changingDir = (path) => {
  process.chdir(path);
  currentWorkingDir();
}