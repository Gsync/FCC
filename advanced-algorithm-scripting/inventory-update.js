// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.Update the current existing inventory item quantities(in arr1).If an item cannot be found, add the new item and quantity into the inventory array.The returned inventory array should be in alphabetical order by item.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

// Here are some helpful links:

// Global Array Object

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let newItems = [], currentItems = [];
    arr2.map(e2 => {
        arr1.map(e1 => {
            if (e1.includes(e2[1])) {
                e1[0] += e2[0];
            }
            // console.log({e1, e2});
        });
    });

    arr2.map(function (item) {
        newItems.push(item[1]);
    });

    // Get item's name for Current Inventory
    arr1.map(function (item) {
        currentItems.push(item[1]);
    });

    // Add new inventory items to current inventory.
    newItems.map(function (item) {
        if (currentItems.indexOf(item) === -1) {
            index = newItems.indexOf(item);
            arr1.push(arr2[index]);
        }
    });

    console.log(arr1.sort((a,b) => a[1] > b[1]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); 
//length should return an array with a length of 6.


updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);
//should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); //should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
//should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].