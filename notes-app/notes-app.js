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

document.querySelector('button').addEventListener('click', function (e) { 
    e.target.textContent = 'The button was clicked'
})