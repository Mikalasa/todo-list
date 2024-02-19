function ajax_fetchTodos(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const todoListContainer = document.querySelector('.Todo-Display')
            // return html
            // log(html)
            todoListContainer.innerHTML = ''
            todoListContainer.innerHTML = html
        })
        .catch(error => console.error('Error:', error))
}

function  ajax_reloadListLiveTodo() {
    const url = 'api/todo_menu_api/get_liveTodo.php'
    ajax_fetchTodos(url)
}