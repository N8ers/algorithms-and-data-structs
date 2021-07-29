// Example 1                                                       //
// Write a function called 'same', that accepts 2 arrays           //
// Returns true if...                                              //
// Every value in arr1 has a corresponding value SQUARED in arr2   //
// The number of values must be the same                           //
// sample 1) same([1,2,3], [4,1,9]) // true
// sample 2) same([1,2,3], [1,9])   // false
// sample 3) same([1,2,1], [4,4,1]) // false

// My first approach
function same_1(arr1, arr2) {
  // are both args arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("At leaset one argument is not an arrray");
    return false;
  }

  // safety check that lengths are the same
  if (arr1.length !== arr2.length) {
    console.log("Arguments lengths do not match");
    return false;
  }

  // build an obj for arr1 of values^2: frequency
  let refernceObj = {};
  for (let i = 0; i < arr1.length; i++) {
    const squaredValue = arr1[i] ** 2;

    if (!refernceObj[squaredValue]) {
      refernceObj[squaredValue] = 1;
    }

    refernceObj[squaredValue] = refernceObj[squaredValue] + 1;
  }

  // loop over arr2, removing items from obj
  for (let i = 0; i < arr2.length; i++) {
    // check if arr2[i] has a value in referenceObj
    if (!refernceObj[arr2[i]]) {
      console.log(arr2[i], " does not appear in the reference object");
      return false;
    }

    refernceObj[arr2[i]] = refernceObj[arr2[i]] - 1;

    // if value in referenceObj, subtract value OR delete from obj if 0
    if (refernceObj[arr2[i]] < 1) {
      delete refernceObj[arr2[i]];
    }
  }

  if (!refernceObj === {}) {
    console.log("referenceObject is not empty");
    return false;
  }

  // if obj is empty, return true
  console.log("true, so far");
  return true;
}

// Colt refactor
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // this is cool, instead of 'destroying' the referenceObj, we make two obj...
  // then loop through the values and see if the match frequency
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false
same([3, 2, 4], "I am a string"); // false;
