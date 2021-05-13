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

// 1. Convert array to array of objects -> text, completed property (Boolean)
// 2. Create function to remove a todo by text value

const deleteTodo = function(todos, text) {
    const index = todos.findIndex(function(aTodo) {
        return aTodo.text.toLowerCase() === text.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
    
}

deleteTodo(todos, 'workout')
console.log(todos)