// Flatten a nested array. You must account for varying levels of nesting.

// Remember to use Read-Search-Ask if you get stuck. 
// Try to pair program. Write your own code.

// Here are some helpful links:

// Array.isArray()

function steamrollArray(arr) {
    // I'm a steamroller, baby
    var arr2 = [];
    var flatten = function(arg) {
        if (!Array.isArray(arg)) {
            arr2.push(arg);
        } else {
            for (var a in arg) {
                flatten(arg[a]);
            }
        }
    }
    arr.forEach(flatten);
    return console.log(arr2);
  }
  
  steamrollArray([[["a"]], [["b"]]]) // should return ["a", "b"].
  steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
  steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4].
  steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].  