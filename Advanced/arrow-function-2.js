const add = function (a, b) {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

//Alternative syntax for setting up functions
const car = {
    color: 'Red',
    getSummary() {
        return `This car is ${this.color}`
    }
}

console.log(car.getSummary())
