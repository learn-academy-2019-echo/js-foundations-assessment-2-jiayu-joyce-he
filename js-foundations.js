// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

const ifDindivisibleBy3 = (num) => {
    return num%3 === 0 ? (`${num} is divisible by three`): (`${num} is not divisible by three`)
}

console.log(ifDindivisibleBy3(15));
console.log(ifDindivisibleBy3(0));
console.log(ifDindivisibleBy3(385));
console.log(ifDindivisibleBy3(7));


// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

const helloMe = {
    firstName: "Joyce",
    lastName: "He",
    age: 24,
    gender: "female",
    describe(){
        return (`${this.firstName} ${this.lastName} is ${this.gender} age ${this.age}.`)
    }
}

console.log(helloMe.describe())


// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

const everyOtherItemToString = (arr) => { 
    const string = arr.filter(word => arr.indexOf(word) % 2 === 0)
    return string.join(" ")    
};

console.log(everyOtherItemToString(randomNouns));


// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const wordCapitalizer = (word) => { 
    let arr = word.split("");
    arr.splice(0,1, arr[0].toUpperCase())
    return arr.join("")
};

const wordsCapitalizer = (words) => {
    return words.map(word => wordCapitalizer(word));
}

// console.log(wordCapitalizer(randomNouns[0])) . //to check the funciton for individual word;
console.log(wordsCapitalizer(randomNouns));

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

const countLength = (arr) => {return arr.map(word => word.length)};
console.log(countLength(randomNouns));


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

const alphabetSoup = (arg) => {
    return arg.split("").sort().join("")
}

// console.log("academy".split("").sort().join(""))
console.log(alphabetSoup(testString1));
console.log(alphabetSoup(testString2));
console.log(alphabetSoup(testString3));

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const alphabetSoupMultiInputs = (...arg) => {
    return arg.join("").split("").sort().join("")
}

console.log(alphabetSoupMultiInputs(testString1,testString2,testString3));


// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

const joinVars = (arr1, arr2) => {
    return arr1.map(arr1element => (arr1element.toString() + " " + arr2[arr1.indexOf(arr1element)])).join(" ");
}

const combineString = (arr1,arr2) => {
    return arr1.length === arr2.length ? joinVars(arr1,arr2) : "Variables are not the same length";
}

console.log(combineString(amounts,animals));


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

function joinVarsAdjustSingular (arr1, arr2) {
    // let isSinglular = arr1.map(arr1element => arr1element === 1)
    let beforeJoin = arr1.map(
        arr1element => (
            arr1element.toString() + " " + (
                arr1element !== 1 ? 
                arr2[arr1.indexOf(arr1element)] :
                arr2[arr1.indexOf(arr1element)].slice(0,arr2.length+1)
            )
        )
    )
    return beforeJoin.join(" ")
}

const combineStringAdjustSingular = (arr1,arr2) => {
    return arr1.length === arr2.length ? joinVarsAdjustSingular(arr1,arr2) : "Variables are not the same length";
}

console.log(combineStringAdjustSingular(amounts,animals));