const palindromes = function (text) {
    let arr = [...text]
        .map(l => l.toLowerCase())
        .filter(l => /^[A-Z0-9]$/i.test(l)
    )

    const textLength = arr.length
    for (let i = 0; i < textLength; i++) {
        if (arr[i] != arr[(textLength - 1) - i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
