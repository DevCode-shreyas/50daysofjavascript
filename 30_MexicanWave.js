function wave(str) {
  // Your Code goes below
  var len = str.length;
  var arr = [];
  if (len == 0) return arr;

  var count = 0;

  while (count < len) {
    if (str.charAt(count).match(/[a-zA-Z]/))
      arr.push(
        str.substring(0, count) +
          str.charAt(count).toUpperCase() +
          str.substring(count + 1, len)
      );

    count++;
  }

  return arr;
}

console.log(wave("hello"));
