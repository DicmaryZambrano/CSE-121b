function processDoll(doll)
{
    if (doll === 1)
    {
        console.log("yum");
        document.querySelector("#matrioshka").value = doll;
    } else {
        console.log("no chocolate");
        document.querySelector("#matrioshka").value = doll;
        processDoll(doll-1)
    }
}

function start()
{
    let doll = parseFloat(document.querySelector("#number").value);
    processDoll(doll);
}

let matriButton = document.querySelector("#start");

matriButton.addEventListener("click", start);