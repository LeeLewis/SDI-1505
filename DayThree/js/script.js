/**
 * Created by llewis on 5/9/15.
 */

//alert("JavaScript works!");

// initial variable
var myName = "Lee";
var myAge = 110;
var myJob  = "\"Full Sail\" University";
var employed = true;

console.log(myJob);

// prompt for user input
newName = prompt("Please enter your first name:");

employed = confirm("Are you employed?");

// Create our first conditional
if (employed === true) {

    lastName = prompt("Please enter your last name:");

    if (lastName === "Lewis") {

        // if first name is correct and last name is correct
        console.log("Greetings, " + myName + " " + lastName);

    } else {

        // if first name is correct and last name is incorrect
        console.log("Sorry, you're from the wrong family!");

    }

} else {

    // if the first name is wrong
    console.log("Intruder alert!");

}

// new variables for data type tests
var myNumber = 0;
var secondNumber = 3.14159265;

myNumber = parseFloat(prompt("Enter the number 3.14159265."));

if (myNumber === secondNumber) {

    console.log("They match exactly!  The number was " + myNumber);

} else {

    console.log("The number you entered was " + myNumber);

}

