
let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total(1,2,3,4,5,6,7,8,9,10)

console.log("The total is "+theTotal)


function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += aNumber*1//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	return sum
}

console.log(typeof 42)
console.log(typeof "abc")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof { a: 1 })
console.log(typeof [1, 2, 3])
console.log(typeof function hello() {})