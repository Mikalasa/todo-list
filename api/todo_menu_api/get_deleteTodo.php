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
    $queryDeleted = "SELECT * FROM user_todo WHERE user_id = ? AND status = 'delete' ORDER BY addTime DESC";
    $stmt = $conn->prepare($queryDeleted);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $resultDeleted = $stmt->get_result();
    $todosDeleted = $resultDeleted->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
} else {
    $queryDeleted = "SELECT * FROM todos WHERE status = 'delete' ORDER BY addTime DESC";
    $resultDeleted = $conn->query($queryDeleted);
    $todosDeleted = $resultDeleted->fetch_all(MYSQLI_ASSOC);
}

include '../../template/todos_listDelete_template.php';
$conn->close();
?>
