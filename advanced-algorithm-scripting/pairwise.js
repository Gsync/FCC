// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices.Once an element has been used, it cannot be reused to pair with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are[7, 13] and[9, 11].We can then write out the array with their indices and values.

//     Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

// Here are some helpful links:

// Array.prototype.reduce()

function pairwise(arr, arg) {
    const arrCopy = arr;
    let sum = 0;
    for (let i=0; i<arrCopy.length; i++) {
        for (let j=i+1; j<arrCopy.length; j++) {
            if (arrCopy[i] + arrCopy[j] === arg) {
                sum = sum + i + j;
                arrCopy[i] = arrCopy[j] = NaN;
            }
        }
    }
    return console.log(sum);
}

pairwise([1, 4, 2, 3, 0, 5], 7) // should return 11.
pairwise([1, 3, 2, 4], 4) // should return 1.
pairwise([1, 1, 1], 2) // should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) // should return 10.
pairwise([], 100) // should return 0.

/* Solution Reference: https://forum.freecodecamp.org/t/algorithm-pairwise/16038 */