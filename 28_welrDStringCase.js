function toWeirdCase(string) {
  // Your code goes here
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
