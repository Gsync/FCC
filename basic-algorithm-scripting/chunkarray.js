function chunkArrayInGroups(arr, size) {
  // Break it up.
  // arr = arr.slice();
  var array = [];
  for (var i = 0, len = arr.length; i < len; i+=size) {

  array.push(arr.slice(0, size));
  arr = arr.slice(size);
  }
  return console.log(array);
}

// function chunkArrayInGroups(arr, size) {
//   // Break it up
//   // It's already broken :(
//   arr = arr.slice();
//   var arr2 = [];
//   for(var i = 0, len = arr.length; i < arr.length; i+=size) {
//     arr2.push(arr.slice(0, size));
//     arr = arr.slice(size);
//   }
//   return console.log(arr2);
// }

chunkArrayInGroups(["a", "b", "c", "d"], 2);

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].



