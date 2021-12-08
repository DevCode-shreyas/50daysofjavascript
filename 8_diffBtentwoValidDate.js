const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    const date1 = new Date(dateText1);
    const date2 = new Date(dateText2);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / DAY_IN_MILLISECONDS);
}


console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
