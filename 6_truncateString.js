const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    const words = str.split(' ');
    const newWords = words.slice(0, wordLimit);
    return newWords.join(' ');
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
