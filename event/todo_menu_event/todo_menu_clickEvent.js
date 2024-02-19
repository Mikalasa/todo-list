function bindListClickEvent() {
    const buttonElements = document.querySelectorAll('.todo-menu-icon-box')
    buttonElements.forEach(el => {
        el.addEventListener('click', handleListClick)
    })
}

function handleListClick(event) {
    const target = event.target
    const allElements = document.querySelectorAll('.todo-menu-icon-box-active')
    allElements.forEach(el => {
        el.classList.remove('todo-menu-icon-box-active')
    })
    if (target.classList.contains('todo-menu-list')) {
        //log("clicked list")
        target.parentElement.classList.add('todo-menu-icon-box-active')
        ajax_listLiveTodo()
    }
    if (target.classList.contains('todo-menu-delete')) {
        //log("clicked deleteList")
        target.parentElement.classList.add('todo-menu-icon-box-active')
        ajax_listDeleteTodo()
    }
    if (target.classList.contains('todo-menu-complete')) {
        //log("clicked complete")
        target.parentElement.classList.add('todo-menu-icon-box-active')
        ajax_listCompleteTodo()
    }
}

function bindTodoScrollEvent() {
    const todoDisplay = document.querySelector('.Todo-Display');
    todoDisplay.addEventListener('scroll', function() {
        todoDisplay.classList.add('scrolling');
        clearTimeout(todoDisplay.scrollTimeout);
        todoDisplay.scrollTimeout = setTimeout(() => {
            todoDisplay.classList.remove('scrolling');
        }, 500);
    });
}

function ajax_listLiveTodo() {
    const url = 'api/todo_menu_api/get_liveTodo.php'
    ajax_fetchTodos(url)
}

function ajax_listDeleteTodo() {
    const url = 'api/todo_menu_api/get_deleteTodo.php'
    ajax_fetchTodos(url)
}

function ajax_listCompleteTodo() {
    const url = 'api/todo_menu_api/get_completeTodo.php'
    ajax_fetchTodos(url)
}


function main() {
    bindListClickEvent()
    bindTodoScrollEvent()
}

main()