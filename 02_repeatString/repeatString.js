const repeatString = (word, count) => {
    if (Math.sign(count) == -1){
        return 'ERROR'
    }
    let repeatedString = ""

    for (let x = 0; x < count; x++){
        repeatedString += word
    }

    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
