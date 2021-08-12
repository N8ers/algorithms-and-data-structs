// Write a function called averagePair
// given a sorted array of ints and a target average
// determine if there is a pair of values in the array
// where the average of the pair equals the target.
// There may be more than one pair.

function averagePair(arr, target) {
  let point1 = 0;
  let point2 = arr.length;

  while (point1 < arr.length) {
    let sum = point1 + point2;
    let average = sum / 2;

    if (average === target) {
      console.log("TRUE");
      return true;
    }

    if (average < target) {
      point2++;
    } else {
      point1++;
    }
  }

  console.log("FALSE");
  return false;
}

// Notes
//

// Colts refactor
// function averagePair() {}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
