// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Math.max()
// Math.min()
// Array.prototype.reduce() 


function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let num = 0;
      for (var i = max-1; i > min; i--) {
        num = num + i;
      }
  return arr.reduce(function (sum, value) {
      return sum + value  + num;
});
}

sumAll([0, 5]); //should return a number.
sumAll([1, 4]); //should return 10.
sumAll([4, 1]); //should return 10.
sumAll([5, 10]); //should return 45.
sumAll([10, 5]); //should return 45.