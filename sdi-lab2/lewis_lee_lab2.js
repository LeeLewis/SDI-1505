//alert("JavaScript works!");

/*
Lee A. Lewis
SDI 1505
Lab 2
Variables and Outputs
 */

// variables
var myName = "Lee Lewis";
var myAge  = 110;
var myJob  = "\"Course Director\"";
var employed = true;
var numOfYears = 0;

// Initial outputs
console.log("Hello, my name is " + myName + ".");
console.log("I'm a " + myJob + ".");
console.log("I'm " + myAge + " years old today.");
console.log("It's " + employed + " that I'm still employed.");

employed = confirm("Are you still employed?\nClick OK for Yes, or Cancel for No.");
numOfYears = prompt("How many years have you aged?  Please enter a number.");

// cast the string value as a number
numOfYears = parseInt(numOfYears);

console.log("It's " + employed + " that I'm still employed.");
console.log("I am now " + (myAge + numOfYears) + ".");