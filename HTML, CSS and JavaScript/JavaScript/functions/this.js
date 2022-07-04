const students = [
    {
        name: 'Isaac',
        age: 33,
    },
    {
        name: 'Albert',
        age: 23,
    },
    {
        name: 'Ada',
        age: 27,
    }
]

function Age(years) {
	return `${years} years from now, ${this.name} will be ${
		this.age + years
	} years old.`;
}

students.forEach(student => console.log(Age.call(student,5)));