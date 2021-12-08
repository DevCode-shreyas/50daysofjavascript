const number = '+919876543210';

function validateMobile(number)  {
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
