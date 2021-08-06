// Example 1                                                                              //
// Write a function called maxSubArraySum which accepts an arra of ints and a number (n). //
// The function should calculate the max sum of n consecutive elements in the array.      //

function my_maxSubArraySum(arr, n) {
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
// Coles is better, i don't think it has a lot of readability though

// Colts refactor
function maxSubArraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  // sets first window
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  // only one loop has occured so max = temp
  tempSum = maxSum;

  // (i = n) accounts for our offset from the first loop
  for (let i = n; i < arr.length; i++) {
    // tempSum, minus the first val, add the next val
    tempSum = tempSum - arr[i - n] + arr[i];
    // between the two identifies the largest sum
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubArraySum([4, 2, 1, 6], 1); // 6
maxSubArraySum([4, 2, 1, 6, 2], 4); // 13
maxSubArraySum([], 4); // null
