import os from 'node:os';
import { throwError } from "./errorModule.js"
import { invalidInputMes } from './invalidInput.js';

export const osInfo = (input) => {
  console.log('1:',input);
  try {
    const arg = input.split(' ').filter(arg => arg !== '').slice(1)[0];
    switch (arg) {
      case '--EOL':
        console.log(JSON.stringify(os.EOL));
        break;
      
      case '--cpus':
        console.log('cpus');
        console.log(os.cpus());
        break;

      case '--homedir':
        console.log(os.homedir());
        break;

      case '--username':
        console.log('username', input)
        console.log(os.userInfo().username);
        break;

      case '--architecture':
        console.log(os.arch());
        break;

      default:
        invalidInputMes();
    }
  } catch {
    console.log('os error');
    // console.error(e)
    // throwError();
  }

}