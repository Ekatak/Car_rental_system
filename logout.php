<?php
session_start();
include('db_connection.php');

if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];

    $stmt = $conn->prepare("UPDATE user_sessions SET logout_time = NOW() WHERE user_id = ? AND logout_time IS NULL");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();

    session_destroy();
}

header("Location: user_log.php");
exit();
?>