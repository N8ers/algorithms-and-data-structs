// Example 1                                                 //
// Write a function called 'anagram', that accepts 2 strings //
// Returns true if str1 is an anagram of str2                //
// sample 1) anagram('aaz', 'zza')       // false
// sample 2) anagram('cinema', 'iceman') // true
// sample 3) anagram('rats', 'car')      // false
// sample 4) anagram('qwerty', 'qeywrt') // true

// My first approach
function my_anagram(str1, str2) {
  // check for string type
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    console.log(`"${str1}" and/or "${str2}" is not of string.`);
    return false;
  }
  // check for matching lengths
  if (str1.length !== str2.length) {
    console.log(
      `"${str1}" and "${str2}" are NOT anagrams. String lengths do not match.`
    );
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

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      console.log(
        `"${str1}" and "${str2}" are anagrams. Incorrect frequency if letters`
      );
      return false;
    }
  }

  console.log(`"${str1}" and "${str2}" are anagrams!`);
  return true;
}

// Colt refactor
function anagram(str1, str2) {
  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

anagram("aaz", 512); // false
anagram("cinema", "iceman"); // true
anagram("rats", "car"); // false
anagram("qwtertyq", "qeywrttq"); // true
