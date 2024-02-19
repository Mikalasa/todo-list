<?php
$host = 'localhost';
$user = 'root';
$password = '';
$db   = 'todo';

$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
    die("connection fail: " . $conn->connect_error);
}

session_start();

$userFirstName = '';
$userLastName = '';
$fullName = '';

if (isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id'];

    // user name
    $userInfoQuery = "SELECT first_name, last_name FROM users WHERE id = ?";
    $userInfoStmt = $conn->prepare($userInfoQuery);
    $userInfoStmt->bind_param("i", $userId);
    $userInfoStmt->execute();
    $userInfoResult = $userInfoStmt->get_result();

    if ($userInfoRow = $userInfoResult->fetch_assoc()) {
        $userFirstName = $userInfoRow['first_name'];
        $userLastName = $userInfoRow['last_name'];
        $fullName = $userFirstName . ' ' . $userLastName;
    }
    $userInfoStmt->close();

    // todos
    $queryLive = "SELECT * FROM user_todo WHERE user_id = ? AND status = 'live' AND complete = 'no' ORDER BY addTime DESC";
    $stmt = $conn->prepare($queryLive);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    $todosLive = $result->fetch_all(MYSQLI_ASSOC);
} else {
    $queryLive = "SELECT * FROM todos WHERE status = 'live' AND complete = 'no' ORDER BY addTime DESC";
    $resultLive = $conn->query($queryLive);
    $todosLive = $resultLive->fetch_all(MYSQLI_ASSOC);
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo App</title>
    <link rel="stylesheet" href="css/general.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/todoList.css">
    <link rel="stylesheet" href="css/todoList_animation.css">
    <link rel="stylesheet" href="css/statistics.css">
    <link rel="stylesheet" href="css/profile.css">
    <link rel="stylesheet" href="css/login_page_popup.css">
    <link rel="stylesheet" href="css/player.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/static/favicon.ico" type="image/x-icon">
</head>
<body>
    <?php include('template/compoment_template/User_Login_Register.php'); ?>
    <div class="CONTAINER">
        <div class="CONTAINER-RESPONSE-BOX">
            <!-- LEFT -->
            <div class="CONTAINER-LEFT">
                <!-- todoList -->
                <div class="TODO-AREA">
                    <?php include('template/compoment_template/TodoList.php'); ?>
                </div>
            </div>

            <!-- RIGHT -->
            <div class="CONTAINER-RIGHT">
                <div class="CONTAINER-RIGHT-TOOL-AREA">
                    <?php include('template/compoment_template/Statistics.php'); ?>
                    <div class="Profile Component Component-Hover">
                        <?php
                        if (isset($_SESSION['user_id'])) {
                            // already logined
                            include('template/profile_template/logined_template.php');
                        } else {
                            // haven't login
                            include('template/profile_template/unLogin_profile_template.php');
                        }
                        ?>
                    </div>
                </div>
                <div class="CONTAINER-RIGHT-CONTENT-AREA">
                    <div class="Music-Player Component Component-Hover">
                        <?php include('template/compoment_template/Player.php'); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
<!-- utility -->
<script src="utility/utility.js"></script>
<script src="utility/ajax_tool.js"></script>
<!-- todoListEvent -->
<script src="event/todo_event/todo_delete.js"></script>
<script src="event/todo_event/todo_deleteForever.js"></script>
<script src="event/todo_event/todo_edit.js"></script>
<script src="event/todo_event/todo_putBack.js"></script>
<script src="event/todo_event/todo_complete.js"></script>
<script src="event/todo_menu_event/todo_menu_clickEvent.js"></script>
<script src="event/todo_event/todo_undoComplete.js"></script>
<script src="event/todo_event/todo_addNew.js"></script>
<!-- statistics -->
<script src="event/statistics_event/countDifferentTodos.js"></script>
<!-- response -->
<script src="event/layout_response/response_scroll.js"></script>
<!-- login register -->
<script src="event/login_register_event/login_register_event.js"></script>
<script src="event/login_register_event/profile_event.js"></script>
<!-- player -->
<script src="event/player_event/player_event.js"></script>

</html>
