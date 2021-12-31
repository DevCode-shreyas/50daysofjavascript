function getMiddle(s) {
  // your code here
  var middle = s.length / 2;
  if (s.length % 2 === 0) {
    return s.substring(middle - 1, middle + 1);
  } else {
    return s.substring(middle, middle + 1);
  }
}
