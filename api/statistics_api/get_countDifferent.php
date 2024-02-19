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

$statusCounts = array('live' => 0, 'complete' => 0, 'delete' => 0);

if (isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id'];

    $queryLive = "SELECT COUNT(*) as count FROM user_todo WHERE user_id = ? AND status = 'live' AND complete = 'no'";
    $stmt = $conn->prepare($queryLive);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result) {
        $row = $result->fetch_assoc();
        $statusCounts['live'] = $row['count'];
    }

    $queryComplete = "SELECT COUNT(*) as count FROM user_todo WHERE user_id = ? AND status = 'live' AND complete = 'yes'";
    $stmt = $conn->prepare($queryComplete);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result) {
        $row = $result->fetch_assoc();
        $statusCounts['complete'] = $row['count'];
    }

    $queryDelete = "SELECT COUNT(*) as count FROM user_todo WHERE user_id = ? AND status = 'delete'";
    $stmt = $conn->prepare($queryDelete);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result) {
        $row = $result->fetch_assoc();
        $statusCounts['delete'] = $row['count'];
    }
} else {
    // 用户未登录，从 todos 表获取统计
    $queryLive = "SELECT COUNT(*) as count FROM todos WHERE status = 'live' AND complete = 'no'";
    $resultLive = $conn->query($queryLive);
    if ($resultLive) {
        $row = $resultLive->fetch_assoc();
        $statusCounts['live'] = $row['count'];
    }

    $queryComplete = "SELECT COUNT(*) as count FROM todos WHERE status = 'live' AND complete = 'yes'";
    $resultComplete = $conn->query($queryComplete);
    if ($resultComplete) {
        $row = $resultComplete->fetch_assoc();
        $statusCounts['complete'] = $row['count'];
    }

    $queryDelete = "SELECT COUNT(*) as count FROM todos WHERE status = 'delete'";
    $resultDelete = $conn->query($queryDelete);
    if ($resultDelete) {
        $row = $resultDelete->fetch_assoc();
        $statusCounts['delete'] = $row['count'];
    }
}

echo json_encode(['success' => true, 'data' => $statusCounts]);

$conn->close();
?>
