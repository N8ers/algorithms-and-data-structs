// Example 1                                                                              //
// Write a function called maxSubArraySum which accepts an arra of ints and a number (n). //
// The function should calculate the max sum of n consecutive elements in the array.      //

function maxSubArraySum(arr, n) {
  let largestSumSoFar = null;

  for (let i = 0; i < arr.length; i++) {
    let windowValue = 0;
    for (let j = 0; j < n; j++) {
      windowValue = windowValue + arr[i + j];
    }
    if (windowValue > largestSumSoFar) {
      largestSumSoFar = windowValue;
    }
  }

  console.log("largestSumSoFar ", largestSumSoFar);
  return largestSumSoFar;
}

// Notes
//

// Colts refactor
function colt_window(arr, n) {}

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubArraySum([4, 2, 1, 6], 1); // 6
maxSubArraySum([4, 2, 1, 6, 2], 4); // 13
maxSubArraySum([], 4); // null
