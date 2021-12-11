const totalGrains = () => {
  // Code here

  var ans = BigInt(2 ** 64);
  return ans - 1n;
};

const grainsOn = (input) => {
  // Code here

  var ans = BigInt(2 ** (input - 1));
  return ans;
};

console.log(`Grains on 5th square: ${grainsOn(62)}`);
console.log(`Total grains on the Chess Board: ${totalGrains()}`);
