function mutation(arr) {
  var second = arr[1].toLowerCase();
  var first = arr[0].toLowerCase();

  for (var i = 0; i < second.length; i++) {

    if (first.indexOf(second[i]) < 0 ) {
      return console.log(false);
    }
  }

  return console.log(true);
}

mutation(["hello", "hey"]); // should return false
mutation(["hello", "Hello"]); // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // should return true.
mutation(["Mary", "Army"]); // should return true.
mutation(["Mary", "Aarmy"]); // should return true.
mutation(["Alien", "line"]); // should return true.
mutation(["floor", "for"]); // should return true.
mutation(["hello", "neo"]); // should return false.
mutation(["voodoo", "no"]); // should return false.
