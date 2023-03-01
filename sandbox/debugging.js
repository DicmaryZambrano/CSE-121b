const PI = 3.14;
const radius = 3;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}

let num1 = 5;

let num2 = 6;

let result = num1 + num2;

console.log(`sum: ${result}`);

result = num1 * num2;

console.log(`mult: ${result}`);

result = num1 - 1;

console.log(`subtract 1: ${result}`);

console.log("concatinate: Dicmary" + " " + "Zambrano");

var variable = "asign value";

console.log(`assign: ${variable}`);

let num3 = 1;

for (let index = 1; index < 3; index++) {
  num3++;
}

console.log(`incremented 1 to 3 ${num3}`);

console.log(`is ${num1} equal to ${num2}? = ${num1 == num2}`);

console.log(`is ${num1} lower than ${num2}? = ${num1 < num2}`);

console.log(`is ${num3} not equal to ${num2}? = ${num1 != num2}`);

console.log(`is ${num1} less than 10 and greater than 0? = ${num1 < 10 && num1 > 0}`);








