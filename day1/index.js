import { INPUT } from './input.js';

let finalSum = 0;

const numberSum = INPUT.map((line) => {
  let fullNum = line.match(/\d/g);
  fullNum = fullNum.join('');
  let num = fullNum.slice(0, 1) + fullNum.slice(-1);
  finalSum += parseInt(num);
  return finalSum;
});

console.log(finalSum);
