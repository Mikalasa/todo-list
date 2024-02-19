<?php
session_start();
$host = 'localhost';
$user = 'root';
$password = '';
$db = 'todo';

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['id']) && isset($_POST['newTask'])) {
    $idToEdit = $conn->real_escape_string($_POST['id']);
    $newTask = $conn->real_escape_string($_POST['newTask']);

    if (isset($_SESSION['user_id'])) {
        $userId = $_SESSION['user_id'];
        $stmt = $conn->prepare("UPDATE user_todo SET task = ? WHERE id = ? AND user_id = ?");
        $stmt->bind_param("sii", $newTask, $idToEdit, $userId);
    } else {
        $stmt = $conn->prepare("UPDATE todos SET task = ? WHERE id = ?");
        $stmt->bind_param("si", $newTask, $idToEdit);
    }

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => $stmt->error]);
    }
    $stmt->close();
} else {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
}

$conn->close();
?>
