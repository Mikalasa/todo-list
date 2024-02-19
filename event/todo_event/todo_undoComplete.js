function bindUndoCompleteEvent() {
    const todoList = document.querySelector('.TODO-AREA')
    todoList.addEventListener('click', handleUndoCompleteClick)
}

function handleUndoCompleteClick(event) {
    const target = event.target
    //log(target)
    if (target.classList.contains('todoCompletedBtn')) {
        const todoId = event.target.getAttribute('data-id')
        //log("clicked undoCompleteBtn")
        ajax_undoCompleteTodo(todoId)
        target.src = '../../static/todo_icon/todo_uncomplete.png'
        let theParentElement = target.parentElement
        while (!theParentElement.classList.contains('todo-card')) {
            theParentElement = theParentElement.parentElement
        }
        theParentElement.classList.add('todo-unComplete')
        theParentElement.classList.add('todo-rotate-up-animation')
        theParentElement.querySelector('span').classList.remove('todo-complete-lineThrough')
        setTimeout(function() {
            theParentElement.remove()
        }, 1500)
    }
}

function ajax_undoCompleteTodo(id) {
    const data = new FormData()
    data.append('id', id)
    data.append('action', 'undoComplete')
    fetch('api/todo_api/undoComplete_todo.php', {
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
    bindUndoCompleteEvent()
}

main()


