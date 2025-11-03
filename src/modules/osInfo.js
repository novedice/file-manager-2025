import os from 'node:os';
import { throwError } from "./errorModule.js"
import { invalidInputMes } from './invalidInput.js';

export const osInfo = (input) => {
  try {
    const arg = input.split(' ').filter(arg => arg !== '').slice(1)[0];
    switch (arg) {
      case '--EOL':
        console.log(JSON.stringify(os.EOL));
        break;
      
      case '--cpus':
        const osCpus = os.cpus();
        console.log(`overall amount of CPUS is ${osCpus.length}`);
        for (let i=0; i<osCpus.length; i++) {
          console.log(`${i+1}. ${osCpus[i].model}, ${osCpus[i].speed/1000}GHz `)
        }
        break;

      case '--homedir':
        console.log(os.homedir());
        break;

      case '--username':
        console.log(os.userInfo().username);
        break;

      case '--architecture':
        console.log(os.arch());
        break;

      default:
        invalidInputMes();
    }
  } catch {
    throwError();
  }

}