import fsPromises from 'node:fs/promises';
import { throwError } from './errorModule.js';
import { Dirent } from 'node:fs';

export const listOfFiles = async (path) => {
  try {
    const list = await fsPromises.readdir(path, {
      withFileTypes: true
    });
    
    const listForPrint = list.map((dirent, index) => ({
      
      index: index+1,
      name: dirent.name,
      type: dirent.isDirectory() ? 'directory' : 'file'
      
    }))
    console.table(listForPrint,[ 'name', 'type'] );
    return listForPrint
  }
  catch (err) {
    throwError(err)
  }
}