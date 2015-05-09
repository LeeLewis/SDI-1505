/**
 * Created by llewis on 5/9/15.
 */

//alert("JavaScript works!");

// initial variable
var myName = "Lee";
var newName = "";
var lastName = "";

// prompt for user input
newName = prompt("Please enter your first name:");

// Create our first conditional
if (newName === myName) {

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
var secondNumber = 5;

myNumber = parseInt(prompt("Enter the number 5."));

if (myNumber === secondNumber) {

    console.log("They match exactly!");

} else {

    console.log("The data types are wrong!");

}

