// Write a function called sameFrequency
// Given 2 positive integers,
// find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("FALSE: num1 and/or num2 are NaN");
    return false;
  }

  let arr1 = Array.from(num1.toString());
  let arr2 = Array.from(num2.toString());

  if (arr1.length !== arr2.length) {
    console.log("FALSE: numbers are not equal lengths");
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let value of arr1) {
    freqCounter1[value] = (freqCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    freqCounter2[value] = (freqCounter2[value] || 0) + 1;
  }

  for (let value in freqCounter1) {
    if (freqCounter1[value] !== freqCounter2[value]) {
      console.log(`FALSE: ${freqCounter1[value]} !== ${freqCounter1[value]}`);
      return false;
    }
  }

  console.log("TRUE");
  return true;
}

sameFrequency(182, 281); // true
sameFrequency(24, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
