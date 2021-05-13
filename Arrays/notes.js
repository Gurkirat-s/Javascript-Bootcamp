const notes = [{
    title: 'My next trip',
    body: 'I would like to go to a Spain'
}, {
    title: 'New Habits',
    body: 'Working out. Sleeping early'
}, {
    title: 'Shopping',
    body: 'Get a new chair'
}]

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

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'shopping')
console.log(note)
