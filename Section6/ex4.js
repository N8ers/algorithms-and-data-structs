// Write a function called areThereDuplicates
// accepts a variable number of arguments
// and checks wether there are any duplicates among the arguments
// this can be done with `frequencyCounter` or `muleiplePointers` patterns

function areThereDuplicates() {
  let values = [...arguments];

  let valueFrequency = {};

  for (const value of values) {
    valueFrequency[value] = (valueFrequency[value] || 0) + 1;
  }

  for (const value in valueFrequency) {
    if (valueFrequency[value] > 1) {
      console.log("TRUE ");
      return true;
    }
  }

  console.log("FALSE");
  return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
