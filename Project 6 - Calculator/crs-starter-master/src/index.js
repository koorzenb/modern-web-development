import {add, addNumbers, addNumbersSpread} from "./calculator.js";

//Exercise 1
console.log("sumOfTwoNumbers", add(2,3));




//Exercise 2
const numbers = [1, 2, 3, 4, 5];
console.log("sumOfMultipleNumbers", addNumbers(numbers));

console.log("sumOfMultipleNumbersSpread", addNumbersSpread(numbers));