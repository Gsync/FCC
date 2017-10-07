// Find the smallest common multiple of the provided parameters that can be 
// evenly divided by both, as well as by all sequential numbers in the range 
// between these parameters.

// The range will be an array of two numbers that will not necessarily be in 
// numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is 
// evenly divisible by all numbers between 1 and 3.

// Remember to use Read-Search-Ask if you get stuck. 
// Try to pair program. Write your own code.

// Here are some helpful links:

// Smallest Common Multiple


function smallestCommons(arr) {
    arr.sort(function(a,b) {
        return b-a;
    });
    var arr2 = [];
    for (var i=arr[1]; i <=arr[0]; i++) {
        arr2.push(i);
    }
    var q = 0;
    var l = 1;
    var n;
    
    do {
      q = arr2[0] * l * arr2[1];
      for (n = 2; n < arr2.length; n++) {
        if (q % arr2[n] !== 0) {
          break;
        }
      }
      l++;
    } while (n !== arr2.length);
  
    return console.log(q);
  }
  
smallestCommons([1, 5]) // should return a number.
smallestCommons([1, 5]) // should return 60.
smallestCommons([5, 1]) // should return 60.
smallestCommons([1, 13]) // should return 360360.
smallestCommons([23, 18]) // should return 6056820.