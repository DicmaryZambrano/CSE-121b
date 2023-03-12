/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    let number1 = parseFloat(document.querySelector("#addend1").value);
    let number2 = parseFloat(document.querySelector("#addend2").value);

    console.log(number1);
    console.log(number2);
    console.log(add(number1,number2));

    document.querySelector("#sum").value = add(number1,number2);
}

let subtractNumbers = function ()
{
    let number1 = parseFloat(document.querySelector("#minuend").value);
    let number2 = parseFloat(document.querySelector("#subtrahend").value);

    console.log(number1);
    console.log(number2);

    let subtract = function (number1,number2)
    {
        return number1 - number2;
    };

    console.log(subtract(number1,number2));

    document.querySelector("#difference").value = subtract(number1,number2);
};

() => {
    let number1 = parseFloat(document.querySelector("#factor1").value);
    let number2 = parseFloat(document.querySelector("#factor2").value);

    console.log(number1);
    console.log(number2);

    console.log(subtract(number1,number2));

    document.querySelector("#product").value = (number1,number2) => number1 * number2;
};

console.log((number1,number2) => number1 / number2)

let sumButton = document.querySelector("#addNumbers");

let subButton = document.querySelector("#subtractNumbers");

let mulButton = document.querySelector("#multiplyNumbers");

let divButton = document.querySelector("#divideNumbers");

sumButton.addEventListener("click", addNumbers);

subButton.addEventListener("click", subtractNumbers);

mulButton.addEventListener("click", 
    () => {
        let number1 = parseFloat(document.querySelector("#factor1").value);
        let number2 = parseFloat(document.querySelector("#factor2").value);

        console.log(number1);
        console.log(number2);

        const result = (number1,number2) => number1 * number2;

        document.querySelector("#product").value = result(number1,number2);
    }
);

divButton.addEventListener("click", 
    () => {
        let number1 = parseFloat(document.querySelector("#dividend").value);
        let number2 = parseFloat(document.querySelector("#divisor").value);

        console.log(number1);
        console.log(number2);

        const result = (number1,number2) => number1 / number2;

        document.querySelector("#quotient").value = result(number1,number2);
    }
);


/* BUILT-IN METHODS */

let date = new Date();
let year
year = date.getFullYear();
document.querySelector("#year").innerHTML = year;


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

let array = arrayRange(1,25,1);

document.querySelector("#array").innerHTML = array;
let odds = array.filter(num => (num % 2) == 1);

document.querySelector("#odds").innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let even = array.filter(num => (num % 2) == 0);
document.querySelector("#evens").innerHTML =even

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let intialvalue = 0
let sum = array.reduce((totalvalue, curentvalue) => totalvalue + curentvalue, intialvalue)
document.querySelector("#sumOfArray").innerHTML = sum

// Step 6: Use the map array method to multiple each ement in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multiple = array.map(random_numbers => random_numbers * 2)
document.querySelector("#multiplied").innerHTML = multiple

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let arrayMultiplied = array.map(num => num * 2).reduce(
  (accumulator, currentValue) => {let initialValue  = accumulator + currentValue
  return initialValue}
);

document.querySelector("#sumOfMultiplied").innerHTML = arrayMultiplied;