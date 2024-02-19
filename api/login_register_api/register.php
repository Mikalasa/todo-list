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

$response = ['success' => false];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];

    $stmt = $conn->prepare("INSERT INTO users (username, password, first_name, last_name) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $password, $firstName, $lastName);

    if ($stmt->execute()) {
        $response = ['success' => true];
    } else {
        $response = ['success' => false, 'error' => $stmt->error];
    }

    $stmt->close();
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
exit();
?>
