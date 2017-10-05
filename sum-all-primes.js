// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, 
// one and itself. For example, 2 is a prime number because it's only divisible by 
// one and two.

// The provided number may not be a prime.

// Remember to use Read-Search-Ask if you get stuck. 
// Try to pair program. Write your own code.

// Here are some helpful links:

// For Loops
// Array.prototype.push()

function sumPrimes(num) {
    function isPrime(number) {
        for (var i=2; i<=number; i++) {
            if (number%i === 0 && number != i) {
                return false;
            }
        }
        return true;
    }
    var arr = [];
    for (var i = 2; i<=num; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }

    var x = arr.reduce(function(a,b) {
        return a+b;
    });
    return console.log(x);
  }

sumPrimes(977) // should return 73156.
sumPrimes(10) // should return 17.
  