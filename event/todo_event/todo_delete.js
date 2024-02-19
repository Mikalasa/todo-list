function bindDeleteEvent() {
    const todoList = document.querySelector('.TODO-AREA')
    todoList.addEventListener('click', handleDeleteClick)
}

function handleDeleteClick(event) {
    const target = event.target
    if (target.classList.contains('deleteBtn')) {
        const todoId = event.target.getAttribute('data-id')
        //log("clicked deleteBtn")
        ajax_deleteTodo(todoId)
        let theParentElement = target.parentElement
        while (!theParentElement.classList.contains('todo-card')) {
            theParentElement = theParentElement.parentElement
        }
        theParentElement.classList.add('todo-rotate-down-animation')
        setTimeout(function() {
            theParentElement.remove()
        }, 1000)
    }
}

function ajax_deleteTodo(id) {
    const data = new FormData()
    data.append('id', id)
    data.append('action', 'delete')
    fetch('api/todo_api/delete_todo.php', {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                reLoadCycleProgress()
            } else {
                error('Error deleting todo: ' + data.error)
            }
        })
        .catch(theError => {
            error('Error:', theError)
        });
}

function main() {
    bindDeleteEvent()
}

main()


