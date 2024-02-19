function bindPutBackEvent() {
    const todoList = document.querySelector('.TODO-AREA')
    todoList.addEventListener('click', handlePutBackClick)
}

function handlePutBackClick(event) {
    const target = event.target
    if (target.classList.contains('putBackBtn')) {
        const todoId = event.target.getAttribute('data-id')
        ajax_putBackTodo(todoId)
        let theParentElement = target.parentElement
        while (!theParentElement.classList.contains('todo-card')) {
            theParentElement = theParentElement.parentElement
        }
        // theParentElement.classList.add('todo-unComplete')
        theParentElement.classList.add('todo-rotate-up-animation')
        setTimeout(function() {
            theParentElement.remove()
        }, 1100)
    }
}

function ajax_putBackTodo(id) {
    const data = new FormData()
    data.append('id', id)
    data.append('action', 'putBack')
    fetch('api/todo_api/putBack_todo.php', {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                reLoadCycleProgress()
            } else {
                error('Error putting back todo: ' + data.error)
            }
        })
        .catch(theError => {
            error('Error:', theError)
        });
}

function main() {
    bindPutBackEvent()
}

main()
