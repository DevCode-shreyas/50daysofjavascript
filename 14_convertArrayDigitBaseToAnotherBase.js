/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
 const convertDigitsToAskedBase = (digits, baseA, baseB) => {


 // convert digits to base 10
 const base10 = digits.reduce((acc, digit, i) => {
    return acc + digit * Math.pow(baseA, digits.length - i - 1);
}, 0);

// convert base 10 to base b
let base10_b = base10;
let baseB_digits = [];
do {
    baseB_digits.push(base10_b % baseB);
    base10_b = Math.floor(base10_b / baseB);
} while (base10_b > 0);

return baseB_digits.reverse();
}