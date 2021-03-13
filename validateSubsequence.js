/*
Validate whether the given array is a subsequence.

Input
[5, 1, 22, 25, 6, -1, 8, 10, 7, 11]
[1, 6, -1, 10]

Output
true
*/

/* 
Time Complexity : O(N)
Space Complexity : O(1)
*/
function validateSubsequence(inputIntegers, inputSubsequence) {
  if (!inputIntegers || inputIntegers.length === 0) return false;
  if (inputIntegers.length > 0 && inputSubsequence.length === 0) return true;

  let subsequencePtr = 0;
  for (let index = 0; index < inputIntegers.length; index++) {
    const element = inputIntegers[index];

    if (inputSubsequence[subsequencePtr] === element) {
      if (subsequencePtr === inputSubsequence.length - 1) return true;
      subsequencePtr++;
    }
    if (subsequencePtr === inputSubsequence.length) return false;
    console.log(element);
  }

  return false;
}

const INPUT_INTEGERS = [5, 1, 22, 25, 6, -1, 8, 10, 7, 11];
const INPUT_SUBSEQUENCE = [1, 6, -1, 10];

const result = validateSubsequence(INPUT_INTEGERS, INPUT_SUBSEQUENCE);
console.log(result);
