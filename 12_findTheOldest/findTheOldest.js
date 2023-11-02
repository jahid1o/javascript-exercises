const findTheOldest = people => {
    people = people
        .map(person => {
            let p = person
            if (!p.yearOfDeath) {
                p.yearOfDeath = (new Date()).getFullYear()
            }
            return p
        })
        .sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1)

    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
