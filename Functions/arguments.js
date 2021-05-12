let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

//Default Arguments
let getScore = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' Score: ' + score
}

console.log(getScore())
console.log(getScore('John', 100))
console.log(getScore(undefined, 20))

//Challenge
// A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = 0.2) {
    //return total * tipPercent
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`

}

console.log(getTip())
console.log(getTip(100))
console.log(getTip(100, 0.3))
console.log(getTip(20, 0.1))
console.log(getTip(40, 0.25))
console.log(getTip(10, undefined))
console.log(getTip(10))

let name = 'John'
let age = 26




console.log(`Hey, my name is ${name}! I am ${age} years old`)