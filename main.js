//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords() {
    // make an empty list to store matches
    matches = []
    // for loop, ++ to keep looping by one through the string
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
            matches.push(dog_names[i])
        }
    }
    if (matches.length > 0) {
        console.log("Matched " + matches.join())
    } else {
        console.log("No Matches")
    }
}

findWords();

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    // we have to iterate backwards when splicing, otherwise, splice would shift all indeces to the left.
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

console.log(replaceEvens(given_arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// 



// Practice with python functions, translate into JavaScript functions

// Division
// First way to write
function division() {
    let num1 = 10;
    let num2 = 50;

    return num2 / num1
}

console.log(division())

// Subtraction
// Second way to write
let sub = function(num1, num2) {
    return num1 - num2
}

console.log(sub(25, 5))

// Addition
// third way to write
let divided = num => {
    return num + 10
}

console.log(divided(50))

// divisible by
function modulo() {
    let num1 = 20;
    let num2 = 2;
    if (num1 % num2 === 0) {
        return "num 1 is perfectly divisible by num 2"
    } else {
        return "Not perfectly divisible"
    }
}

console.log(modulo())