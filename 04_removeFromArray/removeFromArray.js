const removeFromArray = function() {
    for (let i = 1, j = arguments.length; i < j; i++) {
        for (let k = 0, l = arguments[0].length; k < l; k++) {
            if (arguments[i] === arguments[0][k]) {
                arguments[0].splice(k, 1)
            }
        }
    }
    return arguments[0]
};

// Do not edit below this line
module.exports = removeFromArray;
