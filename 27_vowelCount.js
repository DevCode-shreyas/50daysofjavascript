function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
  const vowels = ["a", "e", "i", "o", "u"];
  const strArray = str.toLowerCase().split("");
  for (let i = 0; i < strArray.length; i++) {
    if (vowels.includes(strArray[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));
