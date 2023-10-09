const reverseString = function(string) {
    let stringReversed = ""

    for (let i = 1, j = string.length; i <= j; i++) {
        stringReversed += string[j - i]
    }
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
