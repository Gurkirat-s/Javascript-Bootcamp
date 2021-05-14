const todos = [{
    text: 'Complete readings',
    completed: false
}, {
    text: 'Clean my bedroom',
    completed: true
}, {
    text: 'Walk the dog',
    completed: true
}, {
    text: 'Workout',
    completed: false
}, {
    text: 'Cut the grass',
    completed: false
}]

const incompletes = todos.filter(function(todo){
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompletes.length} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const paragraph = document.createElement('p')
    paragraph.textContent = todo.text
    document.querySelector('body').appendChild(paragraph)
})

document.querySelector('button').addEventListener('click', function (event) {
    console.log('Adding new Todo')
})