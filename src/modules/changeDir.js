import { currentWorkingDir } from "./currentDir.js";
import path from 'node:path';

export const changingDir = (thePath) => {
  process.chdir(path.resolve(process.cwd(),thePath));
  currentWorkingDir();
}