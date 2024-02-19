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
    $queryLive = "SELECT * FROM user_todo WHERE user_id = ? AND status = 'live' AND complete = 'no' ORDER BY addTime DESC";
    $stmt = $conn->prepare($queryLive);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $resultLive = $stmt->get_result();
    $todosLive = $resultLive->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
} else {
    $queryLive = "SELECT * FROM todos WHERE status = 'live' AND complete = 'no' ORDER BY addTime DESC";
    $resultLive = $conn->query($queryLive);
    $todosLive = $resultLive->fetch_all(MYSQLI_ASSOC);
}

include '../../template/todos_listLive_template.php';
$conn->close();
?>
