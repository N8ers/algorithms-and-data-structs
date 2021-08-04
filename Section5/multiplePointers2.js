// Example 1                                                                //
// Write a function called 'countUniqueValues', that accepts a SORTED array //
// and counts the unique values in the array                                //
// There can be negative numbers in the array                               //
// sample 1) countUniqueValues([1,1,1,1,2])           // 2
// sample 2) countUniqueValues([1,2,3,4,4,7,7,12,13]) // 7
// sample 3) countUniqueValues([-2,-1-1,0,1])         // 4

function my_countUniqueValues(arr) {
  let left = 0;
  let right = 1;
  let uniqueValues = [];

  while (right < arr.length) {
    if (!uniqueValues.includes(arr[left])) {
      uniqueValues.push(arr[left]);
    }

    if (arr[left] !== arr[right]) {
      left = right;
    }

    right++;
  }

  console.log("return ", uniqueValues.length + 1);
}

// Notes
// this is cool, so the for loop automatically increments pointer2
// if pointer2 and pointer1 match, we add one to the 'counter' (i)
// then bring i up to the current value of j

// Colts refactor
function countUniqueValues(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] === arr[j];
    }
  }
}

countUniqueValues([1, 2, 3, 4, 5]); // 5
countUniqueValues([1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 7, 7, 12, 13]); // 7
countUniqueValues([-2, -1 - 1, 0, 1]); // 4
