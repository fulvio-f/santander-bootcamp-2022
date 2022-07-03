function replaceEven(array) {
    let replaced = [];
    if (!array) return;
    for (let i = 0; i < array.length; i++) {
        (array[i] % 2 == 0) ? replaced[i] = 0 : replaced[i] = array[i];
    }
    return replaced
}

console.log(replaceEven([1, 3, 4, 6, 80, 33, 23, 90]));