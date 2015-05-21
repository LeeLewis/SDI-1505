/*
  Lee A. Lewis
  SDI 1505
  Lab 7 Review
  Day Eight:  Playing with strings like cats
 */


//  Lab Seven Review code

//alert("JavaScript works!");

// Global variables
var array1 = [ 10, 6, 7, 3, 12, 5, 1 ];
var array2 = [ 25, 100, 4, 22, 16, 105, 2, 7 ];
var array3 = [ 2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42 ];
var numArrays = [array1, array2, array3];
var returnedArray;

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

//  Main Code
for (var each in numArrays) {

  returnedArray = bubbleSort(numArrays[each]);
  console.log("Array number " + each + " sorted is " + returnedArray);

}



