function gcd(a, b) {
  // write your code here
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a === b) {
    return a;
  }
  if (a > b) {
    return gcd(a - b, b);
  } else {
    return gcd(a, b - a);
  }
}

const a = 2154;
const b = 458;

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
