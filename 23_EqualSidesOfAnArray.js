function findEvenIndex(arr) {
    //Code goes here!
    for (var i = 0; i < arr.length; i++) {
        var leftSum = 0;
        var rightSum = 0;
        for (var j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (var k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
    
  }
  