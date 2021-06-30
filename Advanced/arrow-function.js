// New way to define functions
const square = (num) => num * num

// same as above
const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Jon',
    age: 25
}, {
    name: 'Rob',
    age: 26
}, {
    name: 'Bran',
    age: 33
}]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const age25 = people.find((person) => person.age === 25)
console.log(age25.name)