function findOutlier(integers) {
  //your code here
  let even = integers.filter((x) => x % 2 === 0);
  let odd = integers.filter((x) => x % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
