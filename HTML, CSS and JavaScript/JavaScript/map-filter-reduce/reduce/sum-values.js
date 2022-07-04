const NUMBERS = [0,1,2,3,4,5,6,7];

function sumNums(array) {
    return array.reduce((previousValue, currentValue) => previousValue + currentValue);
}

console.log(sumNums(NUMBERS));