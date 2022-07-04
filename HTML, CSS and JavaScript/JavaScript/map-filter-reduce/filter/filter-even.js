const NUMBERS = [0,1,2,3,4,5,6,7];

function filterEven(array) {
    return array.filter(num => num % 2 == 0);
}

const EVEN_NUMBERS = filterEven(NUMBERS);

console.log(EVEN_NUMBERS);