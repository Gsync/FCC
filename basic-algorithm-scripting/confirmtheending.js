function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var array = str.split(" ").join(" ");
      return console.log(array.substr(-1*(target.length)) === target);
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "same");
confirmEnding("Open sesame", "same");