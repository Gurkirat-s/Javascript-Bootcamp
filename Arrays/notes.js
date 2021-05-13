const notes = [{
    title: 'My next trip',
    body: 'I would like to go to a Spain'
}, {
    title: 'Shopping',
    body: 'Get a new chair'
}, {
    title: 'New Habits',
    body: 'Working out. Sleeping early'
}, ]

// notes.pop()             //Removes item at end, returns that item
// notes.push('New Note')  // Add item to end

// console.log(notes.shift())      //Delete first element
// notes.unshift('First Note')     //Add element to beginning 

// notes.splice(1, 0, 'New Second Item')   //Adds item at given index. Second argument should be 0.
// notes.splice(1, 1, 'New Replaced item') // Replaces item at indexes same as (notes[1] = ...)

// notes.forEach(function (item, index) { //Function determines what to do for each array item
//     console.log(index)
//     console.log(item)      //Callback Function - Function that gets passed to a function
// })

const sortNotes = function (notes) {
    notes.sort(function (a, b) {         // - Compare Function ---  a and b are some objects from the array we are sorting
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1                   // return -1 if a should come first. return 1 if b should come first. return 0 if order does not need to changed.
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }                    
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

sortNotes(notes)
console.log(notes)
