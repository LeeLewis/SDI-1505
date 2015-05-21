/**
 * Created by llewis on 5/19/15.
 */

//alert("Yes!");

// global variables
var array1 = [ 10, 6, 7, 3, 12, 5, 1 ];
var array2 = [ 25, 100, 4, 22, 16, 105, 2, 7 ];
var array3 = [ 2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42 ]

//function
function bubbleSort(argArray) {

    // local variables
    var newArray;
    var num1, num2;
    var holder;

    for (var y = 0; y < argArray.length; y++) {
        for (var i = 0; i < argArray.length; i++) {

            num1 = argArray[i];
            num2 = argArray[i + 1];

            if (num1 > num2) {

                holder = num2;
                argArray[i] = num2;
                argArray[i + 1] = num1;

            }

            console.log(argArray);

        }
    }

    return argArray;
}

// main code
for (var x = 0; x < 3; x++) {

    if (x === 0) {
        returnedArray = bubbleSort(array1);
    } else if (x === 1) {
        returnedArray = bubbleSort(array2);
    } else {
        returnedArray = bubbleSort(array3);
    }

    console.log("The sorted array is " + returnedArray);

}