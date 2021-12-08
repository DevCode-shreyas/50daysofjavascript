const obj = { key: 1 };

function isEmpty(obj) {
    // write your solution here
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

console.log(`is empty object: ${isEmpty(obj)}`)
