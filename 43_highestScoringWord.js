function high(x) {
  //code your magic here
  let arr = x.split(" ");
  let max = 0;
  let maxWord = "";
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i].charCodeAt(j) - 96;
    }
    if (sum > max) {
      max = sum;
      maxWord = arr[i];
    }
  }
  return maxWord;
}
