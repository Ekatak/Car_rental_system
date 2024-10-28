<?php
session_start();
include('db_connection.php');

if (!isset($_SESSION['user_id'])) {
    header("Location: user_log.php");
    exit();
}

$user_id = $_SESSION['user_id'];

$stmt = $conn->prepare("SELECT car_name, car_fee FROM user_cart WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$cart_items = [];
while ($row = $result->fetch_assoc()) {
    $cart_items[] = $row;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Cart</title>
    <link rel="stylesheet" href="css/cart_style.css">
</head>

<body>
    <div class="container">
        <header>
            <h1>Your Cart</h1>
            <a href="user_dash.php" class="btn">Back to Dashboard</a>
        </header>

        <div class="cart-items">
            <?php if (count($cart_items) > 0): ?>
            <ul>
                <?php foreach ($cart_items as $item): ?>
                <li>
                    <span><?php echo htmlspecialchars($item['car_name']); ?></span>
                    <span> - ₹<?php echo htmlspecialchars($item['car_fee']); ?></span>
                </li>
                <?php endforeach; ?>
            </ul>
            <?php else: ?>
            <p>Your cart is empty.</p>
            <?php endif; ?>
        </div>
    </div>
</body>

</html>