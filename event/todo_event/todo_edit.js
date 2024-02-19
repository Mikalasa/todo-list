function bindEditEvent() {
    const todoList = document.querySelector('.TODO-AREA');
    todoList.addEventListener('click', handleEditClick);
}

function handleEditClick(event) {
    let target = event.target
    if (target.classList.contains('editBtn')) {
        const todoId = event.target.getAttribute('data-id');
        const todoElement = document.getElementById(`todo-${todoId}`)
        const todoContent = todoElement.querySelector('.todo-content')
        //log(todoElement)
        // change text to input
        const input = document.createElement('input')
        input.type = 'text'
        input.className = 'edit-input'
        input.value = todoContent.textContent
        todoContent.innerHTML = ''
        //log(input)
        todoContent.appendChild(input)
        // change “Edit” btn to a “Save” btn
        //log("target", target)
        target.classList.replace('editBtn', 'saveBtn');
        target.src = '../../static/todo_icon/todo_save.png'
        // save btn event
        const saveTaskHandler = function() {
            ajax_saveTodo(todoId, input.value)
            // remove to maintain edit only has one event
            target.removeEventListener('click', saveTaskHandler)
            target.src = '../../static/todo_icon/todo_edit.png'
        }
        target.addEventListener('click', saveTaskHandler)
    }
}

function ajax_saveTodo(id, newText) {
    // build data form
    const data = new FormData()
    data.append('id', id)
    data.append('newTask', newText)
    data.append('action', 'edit');
    fetch('api/todo_api/edit_todo.php', {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const todoElement = document.getElementById(`todo-${id}`)
                todoElement.querySelector('.todo-content').textContent = newText
                // reset btn
                const saveButton = todoElement.querySelector('.saveBtn')
                saveButton.classList.remove('saveBtn')
                saveButton.classList.add('editBtn')
            } else {
                error('Error updating todo: ' + data.error)
            }
        })
        .catch(theError => {
            error('Error:', theError)
        });
}

function main() {
    bindEditEvent()
}

main()