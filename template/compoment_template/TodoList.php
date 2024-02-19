<!-- todoList top -->
<div class="Todo-Top Component">
    <form id="todoForm" class="todo-input-form">
        <input class="addNew-todo-input" type="text" name="todo" id="newTodo">
        <button type="submit" class="Component">+</button>
    </form>
</div>
<!-- todoList down -->
<div class="Todo-Down Component">
    <div class="ToDo-Menu">
        <div class="todo-menu-box">
            <div class="todo-menu-icon-box todo-menu-icon-box-active">
                <image class="todo-menu-icon todo-menu-list" src="static/todo_icon/list.png"></image>
            </div>
            <div class="todo-menu-icon-box">
                <image class="todo-menu-icon todo-menu-complete" src="static/todo_icon/complete.svg"></image>
            </div>
        </div>
        <div class="todo-menu-box todo-menu-delete-box">
            <div class="todo-menu-icon-box">
                <image class="todo-menu-icon todo-menu-delete" src="static/todo_icon/delete.svg"></image>
            </div>
        </div>
    </div>
    <div class="Todo-List">
        <div class="Todo-Display">
            <?php include('template/todos_listLive_template.php'); ?>
        </div>
    </div>
</div>