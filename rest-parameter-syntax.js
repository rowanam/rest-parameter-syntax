/**
 * To run this file in Gitpod, use the
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum1 = sumAll(1, 2, 3);
console.log(sum1);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3);

const sumAllRest = (...rest) => {
    let sum = 0;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum4 = sumAllRest(1, 2, 3, 4, 5, 6);
console.log("Sum4:", sum4);

// Trying something else

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log("2: Equal,", arr1 == arr2);
console.log("2: Stricly equal,", arr1 === arr2);

let arr3 = [...arr1];
console.log("Arr1:", arr1);
console.log("Arr3:", arr3);
console.log("3: Equal,", arr1 == arr3);
console.log("3: Stricly equal,", arr1 === arr3);
