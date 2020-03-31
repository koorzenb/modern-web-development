import {add, addNumbers} from "./calculator.js";
import {MileyCyrus} from "./miley-cyrus.js";
import {JoeDirt} from "./joe-dirt.js";

//Exercise 1
console.log("sumOfTwoNumbers", add(2,3));




//Exercise 2
const numbers = [1, 2, 3, 4, 5];
console.log("sumOfMultipleNumbers", addNumbers(numbers));

//console.log("sumOfMultipleNumbersSpread", addNumbersSpread(...numbers));




//Exercise 3
const miley = new MileyCyrus();
miley.startWalking();

miley.stopWalking();

const joe = new JoeDirt();
joe.startWalking();
