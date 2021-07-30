// Example 1                                                 //
// Write a function called 'anagram', that accepts 2 strings //
// Returns true if str1 is an anagram of str2                //
// sample 1) anagram('aaz', 'zza')       // false
// sample 2) anagram('cinema', 'iceman') // true
// sample 3) anagram('rats', 'car')      // false
// sample 4) anagram('qwerty', 'qeywrt') // true

// My first approach
function anagram(str1, str2) {
  // check for string type + length match
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    console.log("an argument is not a string");
    return false;
  }

  if (str1.length !== str2.length) {
    console.log("string lengths do not match");
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }

  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }

  for (let value in frequencyCounter1) {
    // value match here
  }

  return true;
}

anagram("aaz", 512); // false
anagram("cinema", "iceman"); // true
anagram("rats", "car"); // false
anagram("qwtertyq", "qeywrttq"); // true
