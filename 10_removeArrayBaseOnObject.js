const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here
    const newArray = array.filter(element => element.field !== filterField);
    return newArray;
}


console.log(`filtered array: ${removeArrayElement(filterField)}`)
