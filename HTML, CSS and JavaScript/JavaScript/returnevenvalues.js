function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} is not an even number.`)
        }
    }
    console.log("The even numbers are:", evenNums);
}

let numbers = [0,1,2,8,5,9];

returnEvenValues(numbers);