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

// function addNumbersSpread(number) {
//     let sum = 0;

//     //HOW DOES SPREAD OPERATOR LOOP? - How to add numbers together
    
//     return sum;
//  }




export {add, addNumbers};