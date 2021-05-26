const notes = [{
    title: 'My next trip',
    body: 'I would like to go to a Spain'
}, {
    title: 'Shopping',
    body: 'Get a new chair'
}, {
    title: 'New Habits',
    body: 'Working out. Sleeping early'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {

    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

 document.querySelector('#create-note').addEventListener('click', function (e) { 
     e.target.textContent = 'The button was clicked'
 })


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})


//--Single--
//p                 everything that has p tag
//#replace          elements that id replace
//.item             elements that have class item

//--Multiple--      Chaining multiple together
//p#order           p tag if it has id of order
//button.inventory  button tag if it has class inventory
//h1#title.application      h1 tag that has both a id title and class application
//h1.application#title      h1 that has class application and id title          //Order doesnot matter