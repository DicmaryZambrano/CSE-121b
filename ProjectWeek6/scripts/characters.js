let charactersInfo = [];

const getIcon = name => {
    let lowerName = name.toLowerCase();
    let newName = lowerName.replace(" ", "-");

    let icon;

    if ( lowerName.includes("traveler"))
    {
        icon = `https://api.genshin.dev/characters/${newName}/icon-big-aether`;
    } else{
        icon = `https://api.genshin.dev/characters/${newName}/icon-big`;
    }

    switch(newName) {
        case "kamisato-ayaka":
            icon = `https://api.genshin.dev/characters/ayaka/icon-big`;
            break;   
        case "raiden-shogun":
            icon = `https://api.genshin.dev/characters/raiden/icon-big`;
            break;   
        case "kujou-sara":
            icon = `https://api.genshin.dev/characters/sara/icon-big`;
            break;   
        case "kaedehara-kazuha":
            icon = `https://api.genshin.dev/characters/kazuha/icon-big`;
            break;   
        case "sangonomiya-kokomi":
            icon = `https://api.genshin.dev/characters/kokomi/icon-big`;
            break;  
        case "traveler":
            icon = `https://api.genshin.dev/characters/traveler-anemo/icon-big-aether`;
            break;  
    }

    return icon;
};

export function output(characters){
    characters.forEach(character => {
        console.log(character)
        const article = document.createElement("article")
        const h3 = document.createElement("h3")
        const h4 = document.createElement("h4")
        const h4_2 = document.createElement("h4")
        const p = document.createElement("p")
        const img = document.createElement("img")
        const icon = document.createElement("img")

        h3.innerHTML =`${character.name}`
        h4.innerHTML =`${character.title}`
        h4_2.innerHTML =`${character.weapon}`
        p.innerHTML =`${character.description}`
        img.src = getIcon(character.name);

        icon.setAttribute("id","icon")
        img.setAttribute("id","icon-big")

        let src;

        switch(character.vision) {
            case "Pyro":
                src = "images/Element_Pyro.svg";
                break;
            case "Cryo":
                src = "images/Element_Cryo.svg";
                break;
            case "Dendro":
                src = "images/Element_Dendro.svg";
                break;
            case "Electro":
                src = "images/Element_Electro.svg";
                break;
            case "Hydro":
                src = "images/Element_Hydro.svg";
                break;    
            case "Geo":
                src = "images/Element_Geo.svg";
                break;   
            case "Anemo":
                src = "images/Element_Anemo.svg";
                break;      
          }

        icon.src = src

        article.appendChild(img)
        article.appendChild(h3)
        article.appendChild(h4)
        article.appendChild(icon)
        article.appendChild(p)


        document.querySelector("#characters").appendChild(article);
    });
}

const getCharacter = async name => {
    const data = await fetch(`https://api.genshin.dev/characters/${name}`);
    const character = await data.json();
    return character;
};
  

export default async function getCharacters(url) {
    const response = await fetch(url);
    if (response.ok) {
        let characters = await response.json();
        let characterArra = await characters.map(getCharacter)
        charactersInfo = await Promise.all(characterArra)
        console.log(charactersInfo);
        output(charactersInfo);
    }
}