// dom.js
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute('src', 'https://placeimg.com/200/200/animals')
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
const newParagraph2 = document.createElement("p");

newH2.innerText = "CSE 121b";
newParagraph2.innerText = "Welcome to Javascript Language";

newSection.appendChild(newH2);
newSection.appendChild(newParagraph2);

document.body.appendChild(newSection);



