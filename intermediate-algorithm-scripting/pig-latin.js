// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, 
// moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
// Write your own code.

// Here are some helpful links:

// Array.prototype.indexOf()
// Array.prototype.push()
// Array.prototype.join()
// String.prototype.substr()
// String.prototype.split()

var regex = /[aeiou]/gi;
var str2 = "";
function translatePigLatin(str) {
        if (str[0].match(regex)) {
            str2 = str + "way";
            return console.log(str2);
        }
        var index = str.indexOf(str.match(regex)[0]);
            str2 = str.substring(index) + str.substring(0, index) + "ay";
            return console.log(str2);
}

translatePigLatin("consonant");

translatePigLatin("california") 
// should return "aliforniacay".
translatePigLatin("paragraphs") 
// should return "aragraphspay".
translatePigLatin("glove") 
// should return "oveglay".
translatePigLatin("algorithm") 
// should return "algorithmway".
translatePigLatin("eight") 
// should return "eightway".