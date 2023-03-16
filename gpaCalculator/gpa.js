function getGrades(inputSelector) {

    const grades = document.querySelector(inputSelector).value;
    const gradesArray = grades.split(",");

    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    return cleanGrades;

}

function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    value = 0;
    if (grade === "A")
    {
        value = 4.0;
    } else if (grade === "B")
    {
        value = 3.0;
    } else if (grade === "C")
    {
        value = 2.0;
    } else if (grade === "D")
    {
        value = 1.0;
    } else 
    {
        value = 0.0;
    }

    console.log(value);
    return value;
}

function calculateGpa(grades) {
    let lenght = grades.length;
    let gradeSum = (grades.map(grade => lookupGrade(grade)).reduce(
        (accumulator, currentValue) => {let initialValue  = accumulator + currentValue
        return initialValue}))
    let gpa = gradeSum / lenght;
    console.log(gpa);
    return gpa;
}

function outputGpa(gpa, selector) {
    const gpaOutput = document.querySelector(selector);
    gpaOutput.innerText = gpa;
}

function clickHandler() {
    console.log("start")
    let grades= getGrades("#grades");
    let gpa = calculateGpa(grades);
    outputGpa(gpa,"#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);

