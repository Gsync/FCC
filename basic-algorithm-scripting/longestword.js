function findLongestWord(str) {
  var split = str.split(' ');
  var arr = [];
  console.log(split);
  for (var i = 0; i < split.length; i++) {
    arr.push(split[i].length);
  }
  return Math.max(arr);
}

findLongestWord("The quick brown fox jumped over the lazy dog");