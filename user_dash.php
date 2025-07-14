<?php
session_start();
include('db_connection.php');

if (!isset($_SESSION['user_id'])) {
    header("Location: user_log.php"); 
    exit();
}

$user_id = $_SESSION['user_id'];
$stmt = $conn->prepare("SELECT username FROM users WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

$username = $user['username'];

$stmt = $conn->prepare("SELECT COUNT(*) as count FROM user_cart WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$cart_count = $result->fetch_assoc()['count'];

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <link rel="stylesheet" href="css/user_dash.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body style="background-image:url('Images/Backgr5.jpg');">
    <div class="container">
        <header class="header">
            <form>
                <button class="btn logout-btn" formaction="logout.php" method="POST">Logout</button>
                <input type="text" id="searchBar" class="search-bar" onkeyup="searchCars()"
                    placeholder="Search for cars...">
                <i class="fas fa-search search-icon"></i>
            </form>
            <div class="user-info">
                <div class="user-logo">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="user-name">
                    <p><?php echo htmlspecialchars($username); ?></p>
                </div>
            </div>
        </header>
        <div class="main-content">
            <section class="car-list-section">
                <h2>Available Cars</h2>
                <div class="car-list" id="carList">
                </div>
            </section>
        </div>
    </div>

    <div class="cart-icon" onclick="window.location.href='view_cart.php'">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count" id="cartCount"><?php echo $cart_count; ?></span>
    </div>
    <template id="carItemTemplate">
        <div class="car-item">
            <img src="car1.jpg" alt="Car Image">
            <div class="car-info">
                <h2 class="car-name"></h2>
                <p>Rental Fee: <span class="car-fee"></span></p>
                <p>Rating: <span class="car-rating"></span></p>
                <p>Color: <span class="car-color"></span></p>
                <button type="button" class="btn add-to-cart-btn"
                    onclick="addToCart(event, 'user_cart.php', 'Car Name Here', 'Car Fee Here')">Add to Cart</button>

                <button type="button" class="btn buy-btn" onclick="window.location.href='Booknow.php'">Book</button>
            </div>
        </div>
    </template>

    <div id="popupMessage" class="popup hidden">Item added to cart!</div>

</body>

<script src="script/user_dash_script.js"></script>
<script>
function addToCart(event, url, carName, carFee) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('car_name', carName);
    formData.append('car_fee', carFee);

    fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
</script>

</html>