const sumAll = (from, to) => {
    if (from > to) {
        [from, to] = [to, from]
    }
    if (typeof from != "number" || typeof to != "number" || Math.sign(from) == -1 || Math.sign(to) == -1) {
        return 'ERROR'
    }
    let sum = 0
    for (let i = from; i <= to; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
