let temp = 65

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside')
}

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only Offer Vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer up some vegan option')
} else {
    console.log('Offer anything on the menu')
}