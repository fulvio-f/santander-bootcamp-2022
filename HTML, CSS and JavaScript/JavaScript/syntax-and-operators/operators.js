function compareNums(num1, num2) {
    let equal = 'equal';
    let than10 = 'greater';
    let than20 = 'less';
    let sum = num1 + num2;
    (num1 === num2) ? equal= 'equal' : equal = 'not equal';
    (sum > 10) ? than10 = 'greater' : than10 = 'not greater';
    (sum > 20) ? than20 = 'greater' : than20 = 'not greater';
    return `The numbers ${num1} and ${num2} are ${equal} numbers. The sum is ${sum}, that is ${than10} than 10 and ${than20} than 20.`
}

console.log(compareNums(5,10));