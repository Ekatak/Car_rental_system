<?php
include 'db_connection.php'; 
session_start();

if (!isset($_SESSION['user_id'])) {
    die("User not logged in.");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cart = json_decode($_POST['cart'], true); 
    $user_id = $_SESSION['user_id'];

    $sql = "INSERT INTO cart (user_id, car_name, car_fee) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    foreach ($cart as $cart_item) {
        $car_name = $cart_item['name'];
        $car_fee = $cart_item['fee'];

        $stmt->bind_param("isd", $user_id, $car_name, $car_fee);
        $stmt->execute();
    }

    $stmt->close();
    $conn->close();

    echo "Cart has been saved successfully!";
} else {
    echo "Invalid request.";
}
?>