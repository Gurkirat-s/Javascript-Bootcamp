let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook.title)

myBook.title = 'Animal Farm'

//Challenge
let person = {
    name: 'Jon Snow',
    age: 25,
    location: 'The Nights Watch'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)

person.age = person.age + 1
console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`)

