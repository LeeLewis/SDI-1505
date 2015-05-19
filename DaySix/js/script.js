//  Lee A. Lewis
//  Day Six
//  SDI 1505
//  Arrays and more functions

//alert("JavaScript works!");


// global variable
var returnedAverage;

// function
function myAverageFunction() {

    // local variables
    var average = 0;
    var addNum  = 0;
    var numberArray = [ 5, 6, 12, 14, 23, 35, 50 ];

    // for loop to loop through the elements of the array
    for (var i = 0; i < numberArray.length; i++) {

        addNum += numberArray[i];

    }

    // average of the total
    average = addNum / numberArray.length;

    // return the final average
    return Math.round(average);

}

returnedAverage = myAverageFunction();

console.log("The average is " + returnedAverage + ".");


























//function myFirstArray() {
//
//    var poppedItem;
//    var pirateNames = ["Blackbeard", "Captain Kidd", "Captain Morgan", "Captain Jack Sparrow"];
//
//    for (var i = 0; i <= pirateNames.length; i++) {
//
//        if (pirateNames[i] === "Captain Morgan") {
//            console.log(pirateNames + " is my favorite pirate.");
//        }
//
//    }
//
//    console.log("The length of the array is " + pirateNames.length);
//
//    pirateNames.unshift("Barbosa", "Black Bart", "Davy Jones");
//
//    console.log(pirateNames);
//
//    poppedItem = pirateNames.pop();
//
//    console.log(pirateNames);
//    console.log("The popped name is " + poppedItem);
//
//}
//
//myFirstArray();




























// global variables
//var num1;
//var num2;
//var operation;
//var finalAnswer;
//
//// math functions
//function add(add1, add2) {
//
//    return add1 + add2;
//
//}
//
//function subtract(sub1, sub2) {
//
//    return sub1 - sub2;
//
//}
//
//function multiply(mult1, mult2) {
//
//    return mult1 * mult2
//
//}
//
//function divide(div1, div2) {
//
//    var outcome;
//
//    if (div2 === 0) {
//        outcome = "Error: can't divide by 0";
//    } else {
//        outcome = div1 / div2;
//    }
//
//    return outcome;
//
//}
//
//function finalOutput() {
//
//    console.log (num1 + " " + operation + " " + num2 + " = " + finalAnswer);
//
//}
//
//// main code
//num1 = parseFloat(prompt("Enter your first number: "));
//num2 = parseFloat(prompt("Enter your second number: "));
//operation = prompt("Enter the math operation you would like to perform:", "+, -, *, /");
//
//if (operation === "+") {
//
//    finalAnswer = add(num1, num2);
//    finalOutput();
//
//} else if (operation === "-") {
//
//    finalAnswer = subtract(num1, num2);
//    finalOutput();
//
//} else if (operation === "*") {
//
//    finalAnswer = multiply(num1, num2);
//    finalOutput();
//
//} else if (operation === "/") {
//
//    finalAnswer = divide(num1, num2);
//    finalOutput();
//
//} else {
//    console.log("Sorry, I didn't understand that.  Try again.");
//}

