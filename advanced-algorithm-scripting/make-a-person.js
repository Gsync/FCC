// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

// Here are some helpful links:

// Closures
// Details of the Object Model


var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly

    this.getFullName = function () {
        return firstAndLast;
    };
    this.getFirstName = function () {
        return firstAndLast.split(" ")[0];
    }
    this.getLastName = function () {
        return firstAndLast.split(" ")[1];
    }
    this.setFirstName = function (firstName) {
        firstAndLast = firstName + " " + firstAndLast.split(" ")[1];
        return firstAndLast;
    }
    this.setLastName = function (lastName) {
        firstAndLast = firstAndLast.split(" ")[0] + " " + lastName;
        return firstAndLast;
    }
    this.setFullName = function (fullName) {
        firstAndLast = fullName;
        return firstAndLast;
    }
    return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
// console.log(Object.keys(bob)); //length should return 6.
// console.log(bob instanceof Person); // should return true.
// console.log(bob.firstName); // should return undefined.
// console.log(bob.lastName); // should return undefined.
// console.log(bob.getFirstName()); // should return "Bob".
// console.log(bob.getLastName()); // should return "Ross".
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName()); // should return "Haskell Ross" after .
console.log(bob.setLastName("Curry"));
console.log(bob.getFullName()); // should return "Haskell Curry" after 
bob.setFullName("Haskell furry");
console.log(bob.getFullName()); // should return "Haskell Curry" after 
// bob.getFirstName(); // should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName(); // should return "Curry" after bob.setFullName("Haskell Curry").
