const allNumbers = [30, 30, 40, 5, 223, 2049, 3034, 5];

const uniqueNumbers = (array) => {
    const unique = new Set(array);
    return [...unique];
}
console.log(uniqueNumbers(allNumbers));