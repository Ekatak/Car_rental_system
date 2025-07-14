<?php
include('db_connection.php');
session_start();

$error_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['Login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result-> fetch_assoc();
        
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            $insert_session = $conn->prepare("INSERT INTO user_sessions (user_id) VALUES (?)");
            $insert_session->bind_param("i", $row['id']);
            $insert_session->execute();
            header("Location: user_dash.php");
            exit();
        } else {
            $error_message = "Invalid password!";
        }
    } else {
        $error_message = "No user found with this email!";
    }
}

$conn->close();
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
        <h1>Login</h1>
        <form id="loginForm" action="user_log.php" method="POST">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" required>
            <button type="submit" class="btn" name="Login">Login</button>
        </form>
    </div>

    <div id="errorModal" class="modal">
        <div class="modal-content">
            <h2>Error</h2>
            <p><?php echo $error_message; ?></p>
            <button class="btn" onclick="closeModal()">Close</button>
        </div>
    </div>

    <script src="js/user_log.js"></script>
    <script>
    function closeModal() {
        document.getElementById('errorModal').style.display = 'none';
    }

    <?php if (!empty($error_message)) { ?>
    document.getElementById('errorModal').style.display = 'flex';
    <?php } ?>
    </script>
</body>

</html>