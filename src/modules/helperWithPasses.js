import path from'node:path';
import { fileURLToPath } from 'node:url';

export const findPass = (directory, file='', __fileName='') => {
  if (__fileName === '') {
    __fileName = fileURLToPath(import.meta.url)
  }
  const __dirName = path.dirname(__fileName);

  return path.join(__dirName, directory, file);
}