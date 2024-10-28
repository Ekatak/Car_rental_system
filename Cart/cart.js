document.addEventListener('DOMContentLoaded', function () {
    const cartItemsList = document.getElementById('cartItems');
    const cartTotalDisplay = document.getElementById('cartTotal');
    const clearCartButton = document.getElementById('clearCart');

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`;

            // Add a remove button for each item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFromCart(item.id));
            cartItem.appendChild(removeButton);

            cartItemsList.appendChild(cartItem);

            total += item.price * item.quantity;
        });

        cartTotalDisplay.textContent = total;
    }

    function removeFromCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }

    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        loadCart();
    });

    loadCart();
});
