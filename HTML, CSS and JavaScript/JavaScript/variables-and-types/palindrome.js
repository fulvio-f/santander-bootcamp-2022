function palindrome(string) {
    if (!string) return;
    return string.split('').reverse().join('') === string;
}

console.log(palindrome('roma amor'));