function addAverage (numbers){
    const odds=[]
    for (const num of numbers){
         if(num % 2 === 1){
            //console.log(num);
            odds.push(num)
            
            
         }

    }
    //console.log(odds);
    let sum = 0;
    for(const num of odds){
     sum = sum + num;
    }
    const conut = odds.length;
    console.log(sum, conut);
    const avg = sum / conut;
    return avg
    
};

const numbers = [32, 23, 7, 44, 13, 55, 34, 9, 6];
const avg = addAverage(numbers);   
console.log('avareg of the odd number', avg);



