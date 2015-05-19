/**
 * Created by llewis on 5/12/15.
 */




//  99 bottles of pop on the wall

for (var pop = 99; pop >= 1; pop--) {

    if (pop === 1) {
        console.log(pop + " bottle of pop on the wall");
        console.log(pop + " bottle of pop!");
    } else {
        console.log(pop + " bottles of pop on the wall");
        console.log(pop + " bottles of pop!");
    }

    console.log("Take one down, pass it around,");

    if (pop > 2) {

        // As long as pop is greater than 2, we need the plural of bottles
        console.log((pop - 1) + " bottles of pop on the wall.");

    } else if (pop == 1) {

        // When pop equals 1, we indicate no more bottles left
        console.log("No more bottles of pop on the wall.");

    } else {

        // When pop equals 2, be need the singular bottle.
        console.log((pop - 1) + " bottle of pop on the wall.");

    }

    console.log(" ");

}





























//  While loop example
//var myNumber = 100;
//
//while (myNumber === 15) {
//    console.log("My number is " + myNumber);
//    //myNumber = myNumber + 1;
//    myNumber++;
//}
//
//console.log("The loop is done");
//
//// for loop example
//for (var i = 0; i <= 10; i++) {
//    console.log("i is equal to " + i);
//}




























//alert("JavaScript works!");


// variables
//   one for first name
//   one for last name
//var firstName = "Lee",
//    lastName  = "Lewis",
//    yourFirstName,
//    yourLastName;
//
//// prompts
//// ask the user for first name
////  ask the user for last name
//yourFirstName = prompt("Enter a name: ", "Type your name here");
//yourLastName  = prompt("Enter your last name: ", "Type you last name here");
//
//if (yourFirstName === firstName || yourLastName === lastName) {
//
//    console.log("You are correct, sir!");
//
//} else {
//
//    console.log("Intruder alert!");
//
//}

