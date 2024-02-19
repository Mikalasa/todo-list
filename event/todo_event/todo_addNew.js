function bindAddNewEvent() {
    const form = document.querySelector('#todoForm')
    form.addEventListener('submit', handleAddNewClick)
}

function handleAddNewClick(event) {
    //log("submit")
    //log(event)
    event.preventDefault()
    const newTodo = document.querySelector('#newTodo').value
    ajax_addNewTodo(newTodo)
    const addNewTodoInput = document.querySelector('.addNew-todo-input')
    addNewTodoInput.value = ''
}

function ajax_addNewTodo(newTodo) {
    const data = new FormData()
    data.append('todo', newTodo)
    fetch('api/todo_api/addNew_todo.php', {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                reloadAfterAddNewTodo()
                reLoadCycleProgress()
            } else {
                console.error('Error adding todo: ' + data.error)
            }
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

function main() {
    bindAddNewEvent()
}

main()


