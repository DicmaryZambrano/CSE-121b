/* Lesson 4 */

/* DATA */

const Dicmary = {
    name: "Dicmary Zambrano",
    photo: "images/me-image.png",
    favoriteFoods: ["arepa","hot dogs","sushi","broccoli and meat stirfry"],
    hobbies: ["drawing","animation","videomages","sewing"],
    placesLived: [
        {
          place: "Venezuela",
          lenght: "2002-Present"
        },
      ],

    addFunctionality: function()
    {

    }
};

/* OUTPUT */

function setUserInfo(User) {
    const userName = document.querySelector("#name");
    const photo = document.querySelector("#photo");

    userName.textContent = User.name;
    photo.src= User.photo;
};

function renderList(array,selector) {
    array.map(
        (element) => {
            const item = document.createElement("li");
            item.appendChild(document.createTextNode(element));
            selector.appendChild(item);
        }
    );
};

function renderDefList(array,selector) {
    array.map(
        (element) => {
            const item1 = document.createElement("dt");
            const item2 = document.createElement("dd");

            item1.appendChild(document.createTextNode(element.place));
            item2.appendChild(document.createTextNode(element.lenght));

            selector.appendChild(item1);
            selector.appendChild(item2);
        }
    );
};

const favoriteFoodUl = document.querySelector("#favorite-foods");
const hobbiesUl = document.querySelector("#hobbies");
const placesLiveddDl = document.querySelector("#places-lived");

setUserInfo(Dicmary);
renderList(Dicmary.favoriteFoods,favoriteFoodUl);
renderList(Dicmary.hobbies,hobbiesUl);
renderDefList(Dicmary.placesLived,placesLiveddDl);

//style html

function styleElement(selector,element) {
    const selectedList = selector.querySelectorAll(element);
    let padding = "10px 20px";

    if (element === "dt")
    {
        padding = "0px"
    }

    selectedList.forEach(item => {
        item.style.display = "inline-block";
        item.style.padding = padding;
    });
};

styleElement(favoriteFoodUl,"li")
styleElement(hobbiesUl,"li")
styleElement(placesLiveddDl,"dd")
styleElement(placesLiveddDl,"dt")

