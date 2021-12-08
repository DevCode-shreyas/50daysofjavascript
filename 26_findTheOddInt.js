function findOdd(arr) {
  //happy coding!

  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }
  for (let key in count) {
    if (count[key] % 2 !== 0) {
      return Number(key);
    }
  }
}
