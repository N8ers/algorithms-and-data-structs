// Example 1                                                      //
// Write a function called 'sumZero', that accepts a SORTED array //
// The function should find the FIRST pair where the sum is 0     //                                      //
// Return an array that includes both values that sum to zero     //
// OR undefined if a pair does not exist                          //
// sample 1) sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sample 2) sumZero([-2,0,1,3])         // undefined
// sample 3) sumZero([1,2,3])            // undefined

// My first approach
function my_sumZero(arr) {
  let point1 = 0;
  let point2 = arr.length - 1;
  let target = 0;

  while (true) {
    let sum = arr[point1] + arr[point2];

    if (sum === target) {
      console.log(`${arr[point1]} + ${arr[point2]} = ${target}`);
      return [arr[point1], arr[point2]];
    }

    if (point1 + 1 === point2) {
      console.log("UNDEFINED");
      return undefined;
    }

    if (sum > target) {
      point2 = point2 - 1;
    } else {
      point1 = point1 + 1;
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
