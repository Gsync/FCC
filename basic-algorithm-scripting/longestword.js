function findLongestWord(str) {
  var split = str.split(' ');
  var arr = [];
  for (var i = 0; i < split.length; i++) {
    arr.push(split[i].length);
  }
  return console.log(Math.max.apply(null, arr));
}

findLongestWord("The quick brown fox jumped over the lazy dog");