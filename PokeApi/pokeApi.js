function analizeResult(result) {
    return new Promise((resolve, reject) => {
        console.log("Making Analisis")
        if (result === 4) {
            resolve("good Job")
        } else {
            reject("you dont know how to read??")
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing result")   
        resolve(`Extra information + ${response}`)
    })
}

const button = document.querySelector("#button");

async function doWork(result) {
    try {    

    const response = await analizeResult(result);
    document.querySelector("#comment").innerHTML = response;
    console.log("response");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);

    } catch (err) {
        console.log(err);
        document.querySelector("#comment").innerHTML = err;
    }

button.addEventListener("click", () => {
    let result = parseInt(document.querySelector("#result").value)
    doWork(result)
    });
}