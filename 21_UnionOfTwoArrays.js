const unionOfArrays = (arr1, arr2) => {
    // code below here
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!newArr.includes(arr2[i])) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
    // code above here
};

  
  console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
  