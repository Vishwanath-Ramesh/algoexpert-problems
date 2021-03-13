/* 
Given the array of un-sorted integers and the target number, find the two numbers which add up to the target number.

Input
[-4, -1, 1, 3, 5, 6, 8, 11]
10

Output
[-1, 11]
*/

/* 
Time Complexity : O(N^2)
Space Complexity : O(1)
*/
function solution1(inputIntegers, targetSum) {
  if (!inputIntegers || inputIntegers.length === 0) return [];

  for (let outerLoop = 0; outerLoop < inputIntegers.length; outerLoop++) {
    for (let innerLoop = 0; innerLoop < inputIntegers.length; innerLoop++) {
      if (inputIntegers[outerLoop] + inputIntegers[innerLoop] === targetSum)
        return [inputIntegers[outerLoop], inputIntegers[innerLoop]];
    }
  }

  return [];
}

/* 
Time Complexity : O(N)
Space Complexity : O(1)
*/
function solution2(inputIntegers, targetSum) {
  const notMacthedElements = {};
  let pairingValue = null;
  let element;

  if (!inputIntegers || inputIntegers.length === 0) return [];

  for (let index = 0; index < inputIntegers.length; index++) {
    element = inputIntegers[index];
    pairingValue = targetSum - inputIntegers[index];

    if (notMacthedElements[`${pairingValue}`]) return [element, pairingValue];
    notMacthedElements[element] = true;
  }

  return [];
}

const INPUT_INTEGERS = [-4, -1, 1, 3, 5, 6, 8, 11];
const TARGET_SUM = 10;

const result = solution2(INPUT_INTEGERS, TARGET_SUM);
console.log(result);
