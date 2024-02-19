<!-- todos_template.php -->
<ul id="todoList" class="todo-list">
    <h3 class="todo-list-title">Tasks</h3>
    <?php foreach ($todosLive as $todo): ?>
        <li class="todo-section todo-card card" id="todo-<?= $todo['id'] ?>">
            <div class="todo-buttons">
                <image class="completeBtn todo-card-icon" data-id="<?= $todo['id'] ?>" src="static/todo_icon/todo_uncomplete.png"></image>
            </div>
            <span class="todo-content"><?= htmlspecialchars($todo['task']) ?></span>
            <div class="todo-buttons">
                <image class="deleteBtn todo-card-icon" data-id="<?= $todo['id'] ?>" src="static/todo_icon/todo_cancel.png"></image>
                <image class="editBtn todo-card-icon" data-id="<?= $todo['id'] ?>" src="static/todo_icon/todo_edit.png"></image>
            </div>
        </li>
    <?php endforeach; ?>
</ul>
