<?php
session_start();

$error_message = "";

// Define allowed users and passwords
$valid_users = [
    "ekta" => "12345678",
    "priyanshu" => "12345678",
    "pragyan" => "12345678",
    "ayush" => "12345678"
];

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['Login'])) {
    $username = strtolower($_POST['email']); // Convert to lowercase to avoid case sensitivity
    $password = $_POST['password'];

    // Check if the entered username exists in the valid_users array and the password matches
    if (isset($valid_users[$username]) && $valid_users[$username] == $password) {
        // Correct username and password, set session and redirect to admin dashboard
        $_SESSION['username'] = ucfirst($username);  // Store username in session
        header("Location: admin_dash.php");
        exit();
    } else {
        // Invalid username or password
        $error_message = "Invalid username or password!";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Login</title>
    <link rel="stylesheet" href="css/user_log.css">
</head>

<body style="background-image: url('Images/Backgr4.jpg');">
    <header class="header">
        <h1 class="brand-logo">Cab Booking Management System</h1>
    </header>

    <div class="container">
        <h1>Welcome Admin!!</h1>
        <form id="loginForm" action="admin_log.php" method="POST">
            <label for="email">Username:</label>
            <input type="text" id="email" name="email" placeholder="Username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" required>
            <button type="submit" class="btn" name="Login">Login</button>
        </form>
    </div>

    <!-- Error Modal -->
    <div id="errorModal" class="modal">
        <div class="modal-content">
            <h2>Error</h2>
            <p><?php echo $error_message; ?></p>
            <button class="btn" onclick="closeModal()">Close</button>
        </div>
    </div>

    <!-- JavaScript for Modal -->
    <script src="js/user_log.js"></script>
    <script>
    function closeModal() {
        document.getElementById('errorModal').style.display = 'none';
    }

    // Show error modal if there is an error message
    <?php if (!empty($error_message)) { ?>
    document.getElementById('errorModal').style.display = 'flex';
    <?php } ?>
    </script>
</body>

</html>