import { invalidInputMes } from "./invalidInput.js";

export const parsingInput = (input) => {
  try {
    console.log('1:', input.split(' '));
    console.log('2:',input.split(' ')[1])
    console.log('3:', input.split(' ').length);
    return input.split(' ')[1];
  } catch {
    invalidInputMes()
  }
}