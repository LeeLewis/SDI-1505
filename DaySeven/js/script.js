//  Lee A. Lewis
//  Day Seven
//  SDI 1505
//  More arrays, loops, and functions

//alert("JavaScript works!");

// Lab six review

// function
function authorFunction() {

    // local arrays
    var authors = [ "Charles Dickens", "William Shakespeare", "Mark Twain", "Hunter S. Thompson"];
    var titles  = [ "Oliver Twist", "Hamlet", "Tom Sawyer", "Fear and Loathing in Las Vegas"];

    // for loop to go through the array items
    //   output each element
    for (var i = 0; i < authors.length; i++) {

        console.log(authors[i] + " wrote " + titles[i] + ".");

    }

    // use an array method to alter the arrays


    // do a final output of the change


}

// main code
authorFunction();