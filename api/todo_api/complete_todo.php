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

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['id']) && $_POST['action'] == 'complete') {
    $idToComplete = $conn->real_escape_string($_POST['id']);

    if (isset($_SESSION['user_id'])) {
        $userId = $_SESSION['user_id'];
        $stmt = $conn->prepare("UPDATE user_todo SET complete = 'yes' WHERE id = ? AND user_id = ?");
        $stmt->bind_param("ii", $idToComplete, $userId);
    } else {
        $stmt = $conn->prepare("UPDATE todos SET complete = 'yes' WHERE id = ?");
        $stmt->bind_param("i", $idToComplete);
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
