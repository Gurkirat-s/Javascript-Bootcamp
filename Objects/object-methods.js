let restaurant = {
    name: 'Montanas',
    guestCapacity: 75,
    guestCount: 0,

    checkAvailability: function (partySize) {  //method (function inside object)
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },

    seatParty: function (partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount = this.guestCount + partySize
        }
    },

    removeParty: function (partySize) {
        this.guestCapacity = this.guestCapacity - partySize
    },

}

console.log(restaurant.checkAvailability(5))
restaurant.seatParty(5)
console.log(restaurant.guestCount)
restaurant.seatParty(65)
console.log(restaurant.guestCount)
restaurant.seatParty(7)
console.log(restaurant.guestCount)
console.log(restaurant.checkAvailability(7))
