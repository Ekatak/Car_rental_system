document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    const productItemTemplate = document.getElementById('productItemTemplate').content;

    const products = [
        { id: 1, name: "Laptop", price: 55000, img: "laptop.jpg" },
        { id: 2, name: "Smartphone", price: 20000, img: "smartphone.jpg" },
        { id: 3, name: "Headphones", price: 2500, img: "headphones.jpg" },
        // Add more products as needed
    ];

    function renderProducts() {
        products.forEach(product => {
            const productItem = productItemTemplate.cloneNode(true);
            productItem.querySelector('h2').textContent = product.name;
            productItem.querySelector('.product-price').textContent = product.price;
            productItem.querySelector('img').src = product.img;
            
            productItem.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
            productList.appendChild(productItem);
        });
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if product is already in the cart
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        // Save cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} has been added to the cart`);
    }

    renderProducts();
});
