function bindCompleteEvent() {
    const todoList = document.querySelector('.TODO-AREA')
    todoList.addEventListener('click', handleCompleteClick)
}

function handleCompleteClick(event) {
    const target = event.target
    if (target.classList.contains('completeBtn')) {
        const todoId = event.target.getAttribute('data-id')
        //log("clicked completeBtn")
        ajax_completeTodo(todoId)
        target.src = '../../static/todo_icon/todo_complete.png'
        let theParentElement = target.parentElement
        while (!theParentElement.classList.contains('todo-card')) {
            theParentElement = theParentElement.parentElement
        }
        theParentElement.classList.add('todo-complete')
        theParentElement.classList.add('todo-rotate-down-animation')
        setTimeout(function() {
            theParentElement.remove()
        }, 1500)
    }
}

function ajax_completeTodo(id) {
    const data = new FormData()
    data.append('id', id)
    data.append('action', 'complete')
    fetch('api/todo_api/complete_todo.php', {
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
    bindCompleteEvent()
}

main()


