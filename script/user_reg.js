const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

if (closePopup) {
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let message = '';
    
    if (usernameInput.value.trim() === '') {
        message = 'Username is required';
    } else if (passwordInput.value.trim() === '') {
        message = 'Password is required';
    } else if (passwordInput.value.length < 6) {
        message = 'Password must be at least 6 characters long';
    } else {
        alert('Registration successful!');
        window.location.href = 'user_log.html';
        return;
    }

    if (message) {
        document.getElementById('popupMessage').innerText = message;
        popup.style.display = 'block'; 
    }
});
