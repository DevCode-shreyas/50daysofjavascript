function randomNumberGeneratorInRange(rangeStart, rangeEnd) {


	return Math.random() * (rangeEnd - rangeStart) + rangeStart;
    
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)