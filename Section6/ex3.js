// Write a function called sameFrequency
// Given 2 positive integers,
// find out if the two numbers have the same frequency of digits

function my_sameFrequency(num1, num2) {
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

// Notes
// basically the same implamentation, i think mine is slightly esier to read

// Colts refactor
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) {
    console.log("FALSE");
    return false;
  }

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let i = 0; i < strNum2.length; i++) {
    countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) {
      console.log("FALSE");
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
