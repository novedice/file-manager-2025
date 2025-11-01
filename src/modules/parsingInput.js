import { invalidInputMes } from "./invalidInput.js";

export const parsingInput = (input) => {
  try {
    return input.split(' ').slice(1).filter(val => (val !== '')&&(val !== ' '));
  } catch {
    invalidInputMes()
  }
}