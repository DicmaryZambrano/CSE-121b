/* Lesson 5 */

/* IF/ELSE IF */

let date = new Date();

let weekDay = date.getDay();


let message1;

if (weekDay == 6 || weekDay == 0)
{
    message1 = "Woohoo!  It is the weekend!";
}
else
{
    message1 = "Hang in there!";
}

console.log(message1)

/* SWITCH, CASE, BREAK */

let message2

switch (weekDay) {

    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 ="Monday";
        break;
    case 2:
        message2 ="Tuesday";
        break;
    case 3:
        message2 ="Wednesday";
        break;
    case 4:
        message2 ="Thursday";
        break;
    case 5:
        message2 ="Friday";
        break;
    case 6:
        message2 ="Saturday";
        break;

  }

console.log(message2);

/* OUTPUT */
document.querySelector("#message2").innerHTML = message2;
document.querySelector("#message1").innerHTML = message1;

/* FETCH */

let url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";

let temples = [];

function output(temples){
    console.log(temples);
    temples.forEach(temple => {
        const article = document.createElement("article")
        const h3 = document.createElement("h3")
        const h4_1 = document.createElement("h4")
        const h4_2 = document.createElement("h4")
        const img = document.createElement("img")

        h3.innerHTML =`${temple.templeName}`
        h4_1.innerHTML =`${temple.location}`
        h4_2.innerHTML =`${temple.dedicated}`
        img.src = `${temple.imageUrl}`

        article.appendChild(h3)
        article.appendChild(h4_1)
        article.appendChild(h4_2)
        article.appendChild(img)

        document.querySelector("#temples").appendChild(article);
    });
}

async function getTemples(url) {
    const response = await fetch(url);
    if (response.ok) {
        temples = await response.json();
        output(temples);
    }
}

function reset(){
    console.log("reset")
    articleSelect = document.querySelector("#temples");
    articles = articleSelect.querySelectorAll("article");
    articles.forEach(article => {
        console.log(article);
        articleSelect.removeChild(article);
    });
}

function sort(a, b) {
    let element = document.querySelector("#sortBy")
    console.log(a.templeName);
    console.log(b.templeName);
    console.log(a.templeName > b.templeName);

    if (element.value === "templeNameAscending"){
        if (a.templeName > b.templeName) {
            return 1;
        } else if (a.templeName < b.templeName) {
            return -1;
        } else return 0; 
    }
    else{
        if (a.templeName > b.templeName) {
            return -1;
        } else if (a.templeName < b.templeName) {
            return 1;
        } else return 0; 
    }
}

function sortBy(){
    reset();
    sortedList = temples.sort(sort);
    output(sortedList);
}

getTemples(url);


document.querySelector("#sortBy").addEventListener("click",sortBy)