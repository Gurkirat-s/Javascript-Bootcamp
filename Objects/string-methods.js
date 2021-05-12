let name = '  Jon Snow   '

//Length
console.log(name.length)

//Convert to Upper Case
console.log(name.toUpperCase())

//Convert to lower Case
console.log(name.toLowerCase())

//Includes
let password = 'abc123password098'
console.log(password.includes('password'))

//Trim
console.log(name.trim())

//Challenge
//True if length > 8 && doesn't contain 'password'
let isValidPassword = function (possiblePassword) {
    return possiblePassword.length > 8 && !possiblePassword.includes('password')
       
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asdfsadfhlp3298h;fp'))
console.log(isValidPassword('asdfpadskjhf3passwordaglf'))
console.log(isValidPassword('asdfasfalhdsflp'))