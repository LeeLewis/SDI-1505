/*
 Lee A. Lewis
 SDI 1505
 Day Nine - Numbers and Date Objects
 */


// function declarations
// Date objects
function goodDates() {

     var myDate = "5/23/2016";

     console.log(myDate);

     var newDate = new Date(2015, 4, 23);
     var secondDate = new Date(myDate);

     console.log(newDate);

     console.log(secondDate);

     dateDiff = newDate - secondDate;

     dateDiff = Math.abs(dateDiff / 1000 / 60 / 60 / 24);

     console.log(dateDiff);

}


function mathMethods(argPrompt) {

    while (isNaN(argPrompt)) {

       argPrompt = prompt("Enter a number please:");

    }

    var newAge = parseInt(argPrompt);

    console.log(newAge);

}

// main code
goodDates();



//var myPrompt = prompt("Enter your age:");

//mathMethods(myPrompt);






































//alert("JavaScript works!");

//// Global Variables
//var myEmail = "lle.wis@fullsail.com";
//var emailTrueOrFalse;
//var returnedString;
//var stringList = "a,b,c,d,e+f,g,h";
//var first = ",";
//var second = "/";
//
// Problem functions
//  First function:  check an email address
function checkEmail(argEmail) {

    var goodEmail = false;
    var atSymbol  = argEmail.indexOf("@");
    var dotSymbol = argEmail.lastIndexOf(".");
    var noSpaces  = argEmail.indexOf(" ");
    var lastAt    = argEmail.lastIndexOf("@");

    //  checking for @ symbol
    if (atSymbol === lastAt && atSymbol != -1) {

        goodEmail = true;

    } else {

        return false;

    }

    if (dotSymbol > -1 && dotSymbol > atSymbol) {

        goodEmail = true;

    } else {

        return false;

    }

    if (noSpaces == -1) {

        goodEmail = true;

    } else {

        goodEmail = false;

    }


    return goodEmail;

}

//// Problem 2
////  Split a string at a specified separator and replace it with a new separator
//function stringSep(oldString, firstSep, newSep) {
//
//    var newString = "";
//
//    for (var i = 0; i < oldString.length; i++) {
//
//        if (oldString.substr(i, 1) === firstSep) {
//
//            newString = newString + newSep;
//
//        } else {
//
//            newString = newString + oldString.substr(i, 1);
//
//        }
//
//        //console.log(newString);
//
//    }
//
//    return newString;
//
//}
//
//
//// Main code
//// called the problem 1 function
////emailTrueOrFalse = checkEmail(myEmail);
////console.log("It is " + emailTrueOrFalse + " that this email is valid.");
//
//// calls the problem 2 function
//returnedString = stringSep(stringList, first, second);
//console.log("The new string is " + returnedString);

