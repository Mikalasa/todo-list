<?php
session_start();
$host = 'localhost';
$user = 'root';
$password = '';
$db = 'todo';
$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("connect error: " . $conn->connect_error);
}

if (isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id'];
    $queryComplete = "SELECT * FROM user_todo WHERE user_id = ? AND complete = 'yes' AND status = 'live' ORDER BY addTime DESC";
    $stmt = $conn->prepare($queryComplete);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $resultComplete = $stmt->get_result();
    $todosComplete = $resultComplete->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
} else {
    $queryComplete = "SELECT * FROM todos WHERE complete = 'yes' AND status = 'live' ORDER BY addTime DESC";
    $resultComplete = $conn->query($queryComplete);
    $todosComplete = $resultComplete->fetch_all(MYSQLI_ASSOC);
}

include '../../template/todos_listComplete_template.php';
$conn->close();
?>
