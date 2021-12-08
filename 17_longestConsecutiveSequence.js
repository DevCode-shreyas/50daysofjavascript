/**
 *
 * @param {number[]} inputArray Array of numbers
 */
 const longestConsecutiveSequence = (inputArray) => {

    const set = new Set(inputArray);
   let maxLength = 0;
   for (let i = 0; i < inputArray.length; i++) {
     if (!set.has(inputArray[i] - 1)) {
       let currentNum = inputArray[i];
       let currentLength = 1;
       while (set.has(currentNum + 1)) {
         currentNum += 1;
         currentLength += 1;
       }
       maxLength = Math.max(maxLength, currentLength);
     }
   }
   return maxLength;
 }