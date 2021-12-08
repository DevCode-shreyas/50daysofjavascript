const str = 'XeroX';

function getTheGapX(str) {

        let startIndex = str.indexOf('X');
        let endIndex = str.lastIndexOf('X');
    
        if (startIndex > endIndex) {
            return -1;
        }
        return endIndex - startIndex;
}



console.log(`Gap between the X's: ${getTheGapX(str)}`)


