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

//to get a list of todos that are false

const getThingsToDo = function(todos) {
    return todos.filter(function(todo) {
        return todo.completed === false
    }) 
}


//Sort by false on top
//With Object sort doesn't know how to sort, so have to tell it how
const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            if (a.text.toLowerCase() < b.text.toLowerCase()){
                return -1
            } else {
                return 1
            }
        }
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))
// deleteTodo(todos, 'workout')
// console.log(todos)