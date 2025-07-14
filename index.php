<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Rental Management System</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body style="background-image: url('Images/Backgr2.jpg')">
    <header class="header">
        <h1 class="brand-logo">Welcome To Our Cab Booking Management System</h1>
    </header>
    <div class="container">
        <h3 class="welcome-message">Hi! If you are a user, click on User; otherwise, click on Admin.</h3>
        <form action="user_reg.php" Method="Post">
            <div class="button-container">
                <button type="submit" class="btn">User</button> <br>
                <button type="button" class="btn" onclick="window.location.href='admin_log.php'">Admin</button>
            </div>
        </form>
    </div>
    <script src="js/script.js"></script>
</body>

</html>