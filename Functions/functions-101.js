let greetUser = function () {
    console.log('Welcome User')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge
//Convert Fahrenheit to Celsius

let convertFahrenheitToCelsius = function(num) {
    return (num - 32) * (5/9)
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))