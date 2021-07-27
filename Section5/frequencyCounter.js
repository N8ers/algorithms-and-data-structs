// Example 1                                                       //
// Write a function called 'same', that accepts 2 arrays           //
// Returns true if...                                              //
// Every value in arr1 has a corresponding value SQUARED in arr2   //
// The number of values must be the same                           //
// sample 1) same([1,2,3], [4,1,9]) // true
// sample 2) same([1,2,3], [1,9])   // false
// sample 3) same([1,2,1], [4,4,1]) // false

// My first approach
function same(arr1, arr2) {
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
  for (let i = 0; i < arr2.length; i++) {
    const squaredValue = arr1[i] ** 2;

    if (!refernceObj[squaredValue]) {
      refernceObj[squaredValue] = 0;
    }

    refernceObj[squaredValue] = refernceObj[squaredValue]++;
  }

  console.log("referenceObj ", refernceObj);

  // loop over arr2, removing items from obj

  // if obj is empty, return true
  console.log("true, so far");
}

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false
same([3, 2, 4], "I am a string"); // false
