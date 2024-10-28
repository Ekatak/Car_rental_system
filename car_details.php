<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cab Details</title>
    <link rel="stylesheet" href="css/car_details.css">
</head>

<body style="background-image:url('Images/Backgr6.jpg');">
    <header class="header">
        <h1 class="brand-logo">Cab Booking Management System</h1>
        <button class="btn back-btn" formaction='user_dash.html'">Back</button>
    </header>

    <div class=" car-details-container">
            <div class="car-images">
                <img id="mainImage" src="" alt="Car Image">
                <div class="thumbnail-images">
                </div>
            </div>
            <div class="car-info">
                <h2 id="carName"></h2>
                <p><strong>Rental Fee:</strong> <span id="carFee"></span></p>
                <p><strong>Rating:</strong> <span id="carRating"></span></p>
                <p><strong>Color:</strong> <span id="carColor"></span></p>
                <span id="carDescription"></span></p>
                <form>
                    <div class="action-buttons">
                        <button class="btn add-to-cart-btn">Add to Cart</button>
                        <button class="btn buy-now-btn" formaction="Booknow.php">Book Now</button>
                    </div>
            </div>
            </div>
            </form>
            <script src="script/car_details_script.js"></script>
</body>

</html>