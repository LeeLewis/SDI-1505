/*
    Lee A. Lewis
    SDI 1505
    Day Ten
    Review of Everything!
 */



// global variables
var numArray = [3, 6, 7, 9, 23, 42, 22, 50, 34];
var currentNum = 111;
var returnedNumber;

// function
function bubbleSort(argArray) {

    // local variables
    var num1,
        num2,
        holder;

    // loop through the array
    for (var newElement in argArray) {

        for (var element in argArray) {

            element = parseInt(element);

            // assign array elements to variables
            num1 = argArray[element];
            num2 = argArray[element + 1];

            // compare to see which is greater
            if (num1 > num2) {

                holder = num1;
                argArray[element] = num2;
                argArray[element + 1] = num1;

            }

        }
    }

    return argArray;

}

function findNumber (argArray, argNumber) {

    // local variables
    argArray = bubbleSort(argArray);
    console.log(argArray);

    for (var i = 0; i < argArray.length; i++) {

        if (argNumber < argArray[i]) {

            return argArray[i];

        }

    }

    return "No greater number in the array";

}

// Main code
returnedNumber = findNumber(numArray, currentNum);
console.log("The next highest number is " + returnedNumber);



























//// Create a function to find the difference between two years.
//// Global Variables
//var returnedNumber;
//
//// Functions
//function yearsBetween() {
//
//    // local variable
//    var yearEntered = parseInt(prompt("What year would you like to use?"));
//    var today = new Date();
//
//    today = today.getFullYear();
//
//    var difference = today - yearEntered;
//
//    return difference;
//
//
//}
//
//
//// Main code
//returnedNumber = yearsBetween();
//console.log("The difference in years is " + returnedNumber);
//
//
//






























//alert("JavaScript works!");

//  Global variables
//var firstNumber = prompt("Please enter a number to be converted: ");
//var returnedNumber;
//
////var numToFormat = parseFloat(prompt("Enter a number to format:"));
////var numOfDecimals = parseInt(prompt("Enter the nubmer of decimal places:"));
//
//// problem 3 variables and prompts
//var dateOne = new Date("5/23/2015");
//var dateTwo = new Date("5/23/2112");
//var hOrD = "hours";
//
//// problem functions
////  Problem 1 function:  Format a number to a certain number of decimal places
//function decFormat(argNumber, decPlaces) {
//
//    return argNumber.toFixed(decPlaces);
//
//}
//
//
////  Problem 2 function:  Convert a string to a number
//function convertNumber(argNumber) {
//
//    // if user did not enter a number, ask again
//    while (isNaN(argNumber)) {
//
//        argNumber = prompt("No, I said enter a number:");
//
//    }
//
//    return parseFloat(argNumber);
//
//}
//
//// Problem 3:  Find the hours or days between two dates
//function dateDiff(firstDate, secondDate, hoursOrDays) {
//
//    var difference = Math.abs(firstDate - secondDate);
//
//    if (hoursOrDays === "hours") {
//
//        difference = Math.round(difference/1000/60/60);
//
//    } else {
//
//        difference = Math.round(difference/1000/60/60/24);
//
//    }
//
//    return difference;
//
//}
//
//
////  Main code
////returnedNumber = convertNumber(firstNumber);
////console.log("The returned number is ", returnedNumber);
//
//// problem 1 function call
////returnedNumber = decFormat(numToFormat, numOfDecimals);
////console.log("The formatted number is", returnedNumber);
//
//// problem 3 function call
//returnedNumber = dateDiff(dateOne, dateTwo, hOrD);
//
//console.log("The difference in " + hOrD + " between " + dateOne.toDateString() + " and " + dateTwo.toDateString() + " is " + returnedNumber);
//
//
