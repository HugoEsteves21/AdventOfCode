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

const input = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
];

const transformNumbers = (string) => {
  Object.entries(spelledNumbers).forEach((obj) => {
    const regex = new RegExp(obj[0], 'g');
    if (string.includes(obj[0])) {
      string = string.replace(regex, obj[1]);
    }
  });
  return string;
};

const mapNumbers = (string) => {
  Object.keys(spelledNumbers).forEach((key) => {
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    string = string.replace(regex, spelledNumbers[key]);
  });
  return string;
};

const numberSum = input.map((line) => {
  console.log(`inside numberSum: ${line}`);
  let newLine = transformNumbers(line);
  console.log(`this is the new line: ${newLine}`);
  let fullNum = newLine.match(/\d/g);
  console.log(fullNum);
  fullNum = fullNum.join('');
  let num = fullNum.slice(0, 1) + fullNum.slice(-1);
  console.log(`NUMBER TO SUM: ${num}`);
  finalSum += parseInt(num);
  return finalSum;
});

console.log(`This is the final sum: ${finalSum}`);
