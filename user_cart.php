<?php
session_start();

include('db_connection.php');

if (!isset($_SESSION['user_id'])) {
    header("HTTP/1.1 403 Forbidden");
    exit();
}

$user_id = $_SESSION['user_id'];

$car_name = $_POST['car_name'] ?? '';  
$car_fee = $_POST['car_fee'] ?? '';    
if (!empty($car_name) && !empty($car_fee)) {
    $stmt = $conn->prepare("INSERT INTO user_cart (user_id, car_name, car_fee) VALUES (?, ?, ?)");
    
    $stmt->bind_param("iss", $user_id, $car_name, $car_fee);
    
    if ($stmt->execute()) {
        echo "Car added to cart successfully!";
    } else {
        echo "Error adding car to cart: " . $stmt->error;
    }
    
    $stmt->close();
} else {
    echo "Invalid car details provided.";
}

$conn->close();
?>