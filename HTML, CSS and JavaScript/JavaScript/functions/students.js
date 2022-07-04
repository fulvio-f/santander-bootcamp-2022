const students = [
    {
        name: 'Isaac',
        score: 7,
        class: '1A',
    },
    {
        name: 'Albert',
        score: 4,
        class: '2C',
    },
    {
        name: 'Ada',
        score: 10,
        class: '2C',
    }
]

function finalScore(students, average) {
    approved = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= average) approved.push(students[i].name);
    }
    return approved;
}

console.log(finalScore(students, 5));