const sayNumberInEnglish = (n) => {
    const SINGLE_ARRAY = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const TEEN_ARRAY = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const DOUBLE_ARRAY = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    //For Single Digit
    if(n.toString().length === 1){
        return SINGLE_ARRAY[n]
    }

    //For Double Digits
    if(n.toString().length === 2){
        if(parseInt(n.toString().charAt(n.length - 2)) === 1){
            return TEEN_ARRAY[(n%10)]
        }

        if(n % 10 === 0){
            return DOUBLE_ARRAY[(n/10) - 2]
        }

        const partOne = DOUBLE_ARRAY[Math.floor((n/10)) - 2]
        const partTwo = SINGLE_ARRAY[n%10]

        return partOne + "-" + partTwo
    }

    if(n%100 === 0 && parseInt(n.toString().charAt(0)) !== 0){
        return SINGLE_ARRAY[(n/100)] + " hundred"
    }

    const remainingNumber =n - parseInt(${parseInt(n.toString().charAt(0))}00)

    if(remainingNumber.toString().length === 1){
        return SINGLE_ARRAY[Math.floor((n/100))] + " hundred " + SINGLE_ARRAY[remainingNumber]
    }

    if(parseInt(remainingNumber.toString().charAt(remainingNumber.length - 2)) === 1){
        return SINGLE_ARRAY[Math.floor((n/100))] + " hundred " + TEEN_ARRAY[(remainingNumber%10)]
    }

    if(remainingNumber % 10 === 0){
        return SINGLE_ARRAY[Math.floor((n/100))] + " hundred " + DOUBLE_ARRAY[(remainingNumber/10) - 2]
    }

    const partOne = DOUBLE_ARRAY[Math.floor((remainingNumber/10)) - 2]
    const partTwo = SINGLE_ARRAY[remainingNumber%10]

    return SINGLE_ARRAY[Math.floor((n/100))] + " hundred " + partOne + "-" + partTwo
};



console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`)
