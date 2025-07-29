You can include screenshots in your **README.md** file by creating a `screenshots` folder in your project directory and linking the images. Here’s how your updated **README.md** will look:

---

 🚖 Cab Booking Management System

A web-based application built using **PHP, MySQL, HTML, CSS, and JavaScript** that allows users to book cars, manage their cart, and provides an admin panel to manage users, deliveries, and saved items.

---

 📸 Screenshots

 Admin Login
![Admin](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/Admin.jpg)

 Admin Dashboard
![Admin Dashboard](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/AdminDash.jpg)

 Database
![Database](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/Db.jpg)
![Database 2](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/Db2.jpg)
![Database 3](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/Db3.jpg)

 User Login
![Login](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/Login.jpg)

 User Registration
![Register](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/Register.jpg)

 User Dashboard
![Dashboard](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/Dash.jpg)

 Home Page
![Index](https://github.com/Ekatak/Car_rental_system/blob/main/Cab_screen/Index.jpg)


---

 📌 Features

 User Features

* User registration and login with secure password hashing.
* Browse available cars with details (name, rental fee, color, rating).
* Search for cars by name.
* Add cars to the cart.
* Book cars instantly.
* View and manage the cart.
* Location search using Google Maps API and save searched locations.

 **Admin Features**

* Admin login with authentication.
* View dashboard with total users, deliveries, and pending items.
* Manage users (view list of registered users).
* Manage deliveries and saved items (future enhancement).

---

 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** PHP
* **Database:** MySQL
* **Tools:** XAMPP
* **APIs:** Google Maps API (for location search)

---

 📂 Database Structure

 `user`

| Field    | Type         |
| -------- | ------------ |
| id       | INT (PK)     |
| username | VARCHAR(50)  |
| email    | VARCHAR(100) |
| password | VARCHAR(255) |

 `cars`

| Field       | Type          |
| ----------- | ------------- |
| id          | INT (PK)      |
| name        | VARCHAR(100)  |
| rental\_fee | DECIMAL(10,2) |
| color       | VARCHAR(50)   |
| rating      | DECIMAL(2,1)  |

 `user_cart`

| Field    | Type     |
| -------- | -------- |
| id       | INT (PK) |
| user\_id | INT (FK) |
| car\_id  | INT (FK) |
| quantity | INT      |

 `login_history`

| Field       | Type     |
| ----------- | -------- |
| id          | INT (PK) |
| user\_id    | INT (FK) |
| login\_time | DATETIME |

---

 ⚡ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cab-booking-management.git
   ```

2. Move files to XAMPP directory:

   ```
   C:\xampp\htdocs\Car_rental_system-main
   ```

3. Create the database:

   * Open **phpMyAdmin**.
   * Create a database named `cab_booking_system`.
   * Import the provided SQL file.

4. Update database connection:
   In `db_connection.php`, update the following:

   ```php
   $conn = new mysqli("127.0.0.1:3307", "root", "", "cab_booking_system");
   ```

5. **Start XAMPP:**

   * Start Apache and MySQL modules.

6. **Access the project:**

   ```
   http://localhost/Car_rental_system-main
   ```

---

 🔑 Default Credentials

| Role  | Email/Username               | Password |
| ----- | ---------------------------- | -------- |
| Admin | admin                        | admin123 |
| User  | Register via the signup page |          |

---

 🚀 Future Enhancements

* Implement booking confirmation and payment integration.
* Delivery tracking module.
* Admin car management (add, edit, delete cars).
* Role-based access control.
* Responsive UI improvements.
