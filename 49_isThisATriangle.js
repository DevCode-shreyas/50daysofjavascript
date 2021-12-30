function isTriangle(a, b, c) {
  // your code here
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}
