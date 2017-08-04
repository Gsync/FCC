function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // var array = [];
  // for (var i=0; i < arr.length; i++) {
  //   if (arr[i] !== Boolean) {
  //     array.push(arr[i]);
  //   }
  // }
  console.log(arr.filter(Boolean));
}

bouncer([7, "ate", "", false, 9]); // should return [7, "ate", 9].
bouncer(["a", "b", "c"]); // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); // should return [].
bouncer([1, null, NaN, 2, undefined]); // should return [1, 2]

