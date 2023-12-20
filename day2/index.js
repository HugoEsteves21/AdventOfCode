import { INPUT } from './input.js';

let finalSum = 0;
const spelledNumbers = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const transformNumbers = (string) => {
  Object.entries(spelledNumbers).forEach((obj) => {
    if (string.includes(obj[0])) {
      let newString = string.replace(obj[0], obj[1]);
      console.log(newString);
      return newString;
    }
  });
};

const numberSum = INPUT.map((line) => {
  line = transformNumbers(line);
  let fullNum = line.match(/\d/g);
  fullNum = fullNum.join('');
  let num = fullNum.slice(0, 1) + fullNum.slice(-1);
  finalSum += parseInt(num);
  return finalSum;
});

console.log(finalSum);
