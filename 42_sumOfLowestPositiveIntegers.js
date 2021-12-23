function sumTwoSmallestNumbers(numbers) {
  // code goes here
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
