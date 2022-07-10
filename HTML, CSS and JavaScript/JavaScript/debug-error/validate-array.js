function validateArray(array, n) {
    try {
    if (!array && !n) throw new ReferenceError('Please type the parameters.');
    if (typeof array !== 'object') throw new TypeError('Please type a valid array.');
    if (typeof n !== 'number') throw new TypeError('Please type a valid size.');
    if (array.length != n) throw new RangeError('Size of array is not valid.');
    return array;
    }
    catch(err) {
        console.log(err);
    }
}

console.log(validateArray([1, 2, 3], 4));