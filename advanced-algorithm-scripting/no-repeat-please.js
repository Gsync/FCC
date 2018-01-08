// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// Permutations
// RegExp

/* Reference Solution: https://codereview.stackexchange.com/questions/59615/recursive-function-that-generates-the-permutations-of-a-string

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-no-repeats-please/16037

 */

function permAlone(str) {
  //Enclosed data to be used by the internal recursive function permutate():
  var   permutations = [], //generated permutations stored here
  nextWord = [], //next word builds up in here
  chars = [], //collection for each recursion level
  regex = /(.)\1+/g; // Create a regex to match repeated consecutive characters.
  
  //split words into an array of characters
if (typeof str === "string") chars = str.split("");

  function permutate(chars) {
    //recursive: generates the permutations
    if (chars.length === 0) permutations.push(nextWord.join(""));
    for (var i = 0; i < chars.length; i++) {
      chars.push(chars.shift()); //rotate the characters
      nextWord.push(chars[0]); //use the first char in the array
      permutate(chars.slice(1)); //Recurse: array-less-one-char
      nextWord.pop(); //clear for nextWord (multiple pops)
    }
  }

  permutate(chars);
  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  return console.log({ permutations, filtered }, filtered.length);
}

permAlone("aab") //should return 2.
permAlone("aaa") //should return 0.
permAlone("aabb") //should return 8.
// permAlone("abcdefa") //should return 3600.
// permAlone("abfdefa") //should return 2640.
permAlone("zzzzzzzz") //should return 0.
permAlone("a") //should return 1.
permAlone("aaab") //should return 0.
permAlone("aaabb") //should return 12.