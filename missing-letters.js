// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Remember to use Read-Search-Ask if you get stuck. 
// Try to pair program. Write your own code.

// Here are some helpful links:

// String.prototype.charCodeAt()
// String.fromCharCode()

function fearNotLetter(str) {
    for (var i=0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode !== str.charCodeAt(0) + i ) {
            return console.log(String.fromCharCode(charCode - 1));
        }
    }
    return undefined;
  }
  
fearNotLetter("abce") // should return "d".
fearNotLetter("abcdefghjklmno") // should return "i".
fearNotLetter("bcd") // should return undefined.
fearNotLetter("yz") // should return undefined.