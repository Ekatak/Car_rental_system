<?php
session_start();
include('db_connection.php');

// Redirect to login page if the user is not logged in
if (!isset($_SESSION['username'])) {
    header("Location: admin_log.php");
    exit();
}

// Get the logged-in admin's username from the session
$username = $_SESSION['username'] ?? 'Admin'; // Fallback to 'Admin' if username is not set

// Fetch all users from the database
$stmt = $conn->prepare("SELECT id, username, email FROM users");
$stmt->execute();
$result = $stmt->get_result();
$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

// Fetch total user count
$count_stmt = $conn->prepare("SELECT COUNT(*) as total FROM users");
$count_stmt->execute();
$count_result = $count_stmt->get_result();
$total_users = $count_result->fetch_assoc()['total'];

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="css/admin_dashboard.css">
</head>

<body>

    <!-- Sidebar -->
    <div class="sidebar">
        <h2>Admin Panel</h2>
        <ul>
            <li><a href="#" class="active">Dashboard</a></li>
            <li><a href="#" id="manage-users">Manage Users</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Saved Items</a></li>
            <li><a href="logout_admin.php">Logout</a></li>
        </ul>
    </div>

    <!-- Main content -->
    <div class="content">
        <header>
            <h1 class="brand-logo">Cab Booking Management System</h1>
            <div class="welcome-message">
                <h2>Welcome, <?php echo htmlspecialchars($username); ?>!</h2> <!-- Display the admin's name -->
            </div>
        </header>

        <div class="dashboard-container">
            <div class="cards">
                <div class="card">
                    <h3>Total Users</h3>
                    <p id="total-users"><?php echo $total_users; ?></p> <!-- Display total users -->
                </div>

                <div class="card">
                    <h3>Active Deliveries</h3>
                    <p>30</p>
                </div>

                <div class="card">
                    <h3>Pending Items</h3>
                    <p>45</p>
                </div>
            </div>

            <!-- User Management Section -->
            <div class="admin-section" id="user-management" style="display: none;">
                <h2>Manage Users</h2>
                <table id="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($users as $user): ?>
                        <tr>
                            <td><?php echo $user['id']; ?></td>
                            <td><?php echo htmlspecialchars($user['username']); ?></td>
                            <td><?php echo htmlspecialchars($user['email']); ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>

            <div class="admin-section">
                <h2>Manage Deliveries</h2>
                <p>This section is currently under development.</p>
            </div>

            <div class="admin-section">
                <h2>Saved Items</h2>
                <p>This section is currently under development.</p>
            </div>
        </div>
    </div>

    <script src="script/admin_dashboard.js"></script>
    <script>
    document.getElementById('manage-users').addEventListener('click', function() {
        document.getElementById('user-management').style.display = 'block';
    });
    </script>
</body>

</html>