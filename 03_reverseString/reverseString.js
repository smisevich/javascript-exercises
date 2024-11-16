const reverseString = function (input) {
  let inputArray = input.split("");
  inputArray.reverse();
  let reversedInput = inputArray.join('');
//   console.log(reversedInput);
  return reversedInput;
};

// reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
