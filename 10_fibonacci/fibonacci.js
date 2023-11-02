const fibonacci = member => {
    member = Number(member)
    if (typeof member != 'number' || member < 0) {
        return "OOPS"
    }
    let f1 = 1, f2 = 1, currentMember = 1

    while (currentMember < member) {
        let f = f1 + f2
        f1 = f2
        f2 = f
        currentMember++
    }
    return f1
};

// Do not edit below this line
module.exports = fibonacci;
