// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
            // the API will send us JSON...but we have to convert the response before we can use it
            // .json() also returns a promise...so we await it as well.
            const data = await response.json();
            doStuff(data);
  }
}
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html =    `<h2>${results.name}</h2>
                    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}
function doStuffList(data) {
    const outputList = document.querySelector("#outputList")
    pokeList = data.results;
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        // note the += here...
        pokeListElement.innerHTML += html;
      });
}


getPokemon(url);
console.log("second: ", results);
doStuffList(urlList);