function isLeapYear (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    else if ( year % 100 === 0 && year % 400 === 0){
        return true
    }
    else {
        return false
    }
}

const isLeap = isLeapYear(2100);
const isLeap1 = isLeapYear(2400);
const isLeap2 = isLeapYear(1900);
const isLeap3 = isLeapYear(2052);

console.log(isLeap, isLeap1, isLeap2, isLeap3);

