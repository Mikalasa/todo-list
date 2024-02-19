<!-- todos_template.php -->
<ul id="todoList-deleted" class="todo-list">
    <h3 class="todo-list-title">Deleted tasks</h3>
    <?php foreach ($todosDeleted as $todo): ?>
        <li class="todo-deleted-section todo-card card falling-animation" id="todo-<?= $todo['id'] ?>">
            <span class="todo-content todo-content-complete-<?= $todo['complete'] ?>"><?= htmlspecialchars($todo['task']) ?></span>
            <div class="todo-buttons">
                <image class="deleteForeverBtn todo-card-icon" data-id="<?= $todo['id'] ?>" src="static/todo_icon/todo_deleteForever.png"></image>
                <image class="putBackBtn todo-card-icon" data-id="<?= $todo['id'] ?>" src="static/todo_icon/todo_putBack.png"></image>
            </div>
        </li>
    <?php endforeach; ?>
</ul>