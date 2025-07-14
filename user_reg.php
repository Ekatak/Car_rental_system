<?php
include('db_connection.php'); 

$message = ""; 

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['Register'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); 

    $check_user = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $check_user->bind_param("s", $email);
    $check_user->execute();
    $result = $check_user->get_result();

    if ($result->num_rows > 0) {
        $message = "Email already registered!"; 
    } else {
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $password);

        if ($stmt->execute()) {
            header("Location: user_log.php"); 
            exit();
        } else {
            $message = "Error: " . $stmt->error; 
        }
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
    <link rel="stylesheet" href="css/user_reg.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body style="background-image: url('Images/Backgr4.jpg');">
    <header class="header">
        <h1 class="brand-logo">Cab Booking Management System</h1>
    </header>

    <div class="container">
        <h1>Registration</h1>
        <form id="registrationForm" action="user_reg.php" method="POST">
            <label for="username" style="color:white;">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username" required>

            <label for="email" style="color:white;">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" required>

            <label for="password" style="color:white;">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" required>

            <button type="submit" class="btn" name="Register">Register</button>
        </form>

        <br>
        <div class="icon">
            <p div="LoginLink">
                <a href="user_log.php">If already have account?Login</a>
            </p>
            <br>
            <a href=" https://accounts.google.com/signin/v2/identifier" class="google-login" target="_blank">
                <i class="fab fa-google"></i>
            </a>
            <a href="https://www.facebook.com/login" class="facebook-login" target="_blank">
                <i class="fab fa-facebook"></i>
            </a>
        </div>
    </div>

    <div class="popup" id="popup" style="display: none;">
        <h2>Message</h2>
        <p id="popupMessage"></p>
        <button id="closePopup">Close</button>
    </div>


    <script>
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    if (closePopup) {
        closePopup.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }

    <?php if (!empty($message)): ?>
    document.getElementById('popupMessage').innerText = <?= json_encode($message) ?>;
    popup.style.display = 'block';
    <?php endif; ?>
    </script>
</body>

</html>