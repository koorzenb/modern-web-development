/**
 * Add two numbers together
 * @param {number} a - the first number
 * @param {number} b - the second number
 */
function add(a, b) {
    return a + b;
}

/**
 * This function adds multiple numbers together
 * @param {Array} numbers - array of numbers to be added together
 */
function addNumbers(numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum = sum + number;
    }

    return sum;
}

/**
 * This function adds an array of numbers together by reducing the array to a single value with accumulator starting at 0
 * @param {*} numbers - array of numbers to be added together
 */
 function addNumbersSpread(numbers) {
     
    let sum = numbers.reduce((total, currentValue) => {
        return total + currentValue;
    }, 0);
    
     return sum;
  }

export {add, addNumbers, addNumbersSpread};