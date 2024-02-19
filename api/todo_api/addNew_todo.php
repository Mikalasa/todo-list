<?php
session_start();
$host = 'localhost';
$user = 'root';
$password = '';
$db = 'todo';

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['todo'])) {
    $newTodo = $conn->real_escape_string($_POST['todo']);
    date_default_timezone_set('Pacific/Auckland');
    $currentTime = date('Y-m-d H:i:s');

    if (isset($_SESSION['user_id'])) {
        $userId = $_SESSION['user_id'];
        $query = "INSERT INTO user_todo (user_id, task, addTime, status, complete) VALUES (?, ?, ?, 'live', 'no')";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("iss", $userId, $newTodo, $currentTime);
    } else {
        $query = "INSERT INTO todos (task, addTime, status, complete) VALUES (?, ?, 'live', 'no')";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $newTodo, $currentTime);
    }

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $conn->error]);
    }
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
}

$conn->close();

?>
