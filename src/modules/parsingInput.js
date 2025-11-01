import { invalidInputMes } from "./invalidInput.js";

export const parsingInput = (input) => {
  try {
    // console.log('1:', input.split(' '));
    // console.log('3:', input.split(' ').length);
    // console.log(input.split(' ').slice(1).filter(val => (val !== '')&&(val !== ' ')))
    return input.split(' ').slice(1).filter(val => (val !== '')&&(val !== ' '));
  } catch {
    invalidInputMes()
  }
}