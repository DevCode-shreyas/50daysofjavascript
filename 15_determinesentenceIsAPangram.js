const isPangram = (input) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const inputLowerCase = input.toLowerCase();
    const inputLowerCaseArray = inputLowerCase.split('');
    const inputLowerCaseArrayWithoutSpaces = inputLowerCaseArray.filter(char => char !== ' ');
    const inputLowerCaseArrayWithoutSpacesAndPunctuation = inputLowerCaseArrayWithoutSpaces.filter(char => alphabet.includes(char));
    const inputLowerCaseArrayWithoutSpacesAndPunctuationSet = new Set(inputLowerCaseArrayWithoutSpacesAndPunctuation);
    const inputLowerCaseArrayWithoutSpacesAndPunctuationSetArray = Array.from(inputLowerCaseArrayWithoutSpacesAndPunctuationSet);
    const inputLowerCaseArrayWithoutSpacesAndPunctuationSetArrayLength = inputLowerCaseArrayWithoutSpacesAndPunctuationSetArray.length;
    const alphabetLength = alphabet.length;
    if (inputLowerCaseArrayWithoutSpacesAndPunctuationSetArrayLength === alphabetLength) {
        return true;
    } else {
        return false;
    }
};

