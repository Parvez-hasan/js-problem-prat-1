// 12 inch 1 feet

function inchToFeet(inch){
const feet = inch / 12;
return feet.toFixed(2)
};
const parvezHeight = inchToFeet(55);
//console.log(parvezHeight);



function inchToFeet2(inch){
const feetFraction = inch / 12;
const feetNumber = parseInt(feetFraction)
const inchRemaining = inch % 12;
const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
return result;
}

const parvezHeight2 = inchToFeet2(65)
console.log(parvezHeight2);

