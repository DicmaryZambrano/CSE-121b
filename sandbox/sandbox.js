
/*
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
*/

/*const array = ["one", "two", "three"];

const new_array = array.map(function (step) {
  return `<li>${step}</li>`;
});

document.getElementById("myList").innerHTML = new_array.join(" ");


const grades = ["A", "B", "A", "C", "F", "D"];

function getGpa (letter)
{
  points= 0;

  if (letter === "A")
  {
    points = 4;
  }

  else if (letter === "B")
  {
    points = 3;
  }

  else if (letter === "C")
  {
    points = 2;
  }

  else if (letter === "D")
  {
    points = 1;
  }

  else
  {
    points = 0;
  }

  return points;
};


const gpaPoints = grades.map(getGpa);

const totalGpa = gpaPoints.reduce(function (total, grade)
{
  return total + grade;
})

const gpa = totalGpa / gpaPoints.length;

fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const result = fruits.filter(word => word.length < 6);

console.log(result);

numbers = [12, 34, 21, 54];

luckNumber = 21;

console.log(numbers.indexOf(luckNumber));*/

// events.js
let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  // make sure it is empty
  // loop through the tasks array. for each of them we need to add the HTML markup for a todo.
}

function newTask() {
  const task = document.getElementById("#todo").value;
  tasks.push({ detail: task, completed: false });
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // note the use of Array.filter to remove the element from our task array
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[0].innerText
  );
  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  console.log(event.currentTarget);
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

  // because we added 'data-function="delete"' to each icon in a task we can access a dataset property on our target
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
}

// we need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.