/* Lesson 2 */

/* VARIABLES */

let myName = "Dicmary Zambrano";

const spanName = document.querySelector("#name");

spanName.textContent = myName;

const date = new Date();

const spanYear = document.querySelector("#year");

spanYear.textContent = date.getFullYear();

let myPhoto = "images/me-image.png";

document.querySelector("#photo").setAttribute("src",myPhoto);

/* ARRAYS */


var foodList = document.createElement("ul");
var foods = ["sweet-and-sour chicken", "hot dogs", "arepa", "beef and vegetables stir-fry", "tres leches cake"]; 

var food = "shrimp tempura";

foods.push(food);


foods.shift();


foods.pop();


for (let index = 0; index < foods.length; index++) {

    var food = document.createElement("li");

    food.appendChild(document.createTextNode(foods[index]));

    foodList.appendChild(food);
}

document.querySelector("#food").appendChild(foodList);


