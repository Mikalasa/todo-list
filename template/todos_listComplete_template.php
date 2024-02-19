<!-- todos_template.php -->
<ul id="todoList" class="todo-list">
    <h3 class="todo-list-title">Completed</h3>
    <?php foreach ($todosComplete as $todo): ?>
        <li class="todo-section todo-card card falling-animation" id="todo-<?= $todo['id'] ?>">
            <div class="todo-buttons">
                <image class="todoCompletedBtn todo-card-icon" data-id="<?= $todo['id'] ?>" src="static/todo_icon/todo_complete.png"></image>
            </div>
            <span class="todo-content todo-complete-lineThrough"><?= htmlspecialchars($todo['task']) ?></span>
            <div class="todo-buttons">
                <image class="deleteBtn todo-card-icon" data-id="<?= $todo['id'] ?>" src="static/todo_icon/todo_cancel.png"></image>
                <image class="editBtn todo-card-icon" data-id="<?= $todo['id'] ?>" src="static/todo_icon/todo_edit.png"></image>
            </div>
        </li>
    <?php endforeach; ?>
</ul>
