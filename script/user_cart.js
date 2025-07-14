let cart = [];
let totalPrice = 0;

function addItemToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `${item.name}: $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
    });
    document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout!');
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCartDisplay();
}

addItemToCart('Item 1', 29.99);
addItemToCart('Item 2', 15.49);
