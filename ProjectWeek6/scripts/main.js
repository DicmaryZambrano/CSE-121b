import getCharacters, {output} from "./characters.js";

let url = "https://api.genshin.dev/characters";

getCharacters(url);

let date = new Date

document.querySelector("#year").innerHTML =  date.getFullYear();