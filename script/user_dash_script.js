document.addEventListener('DOMContentLoaded', function () {
    const carList = document.getElementById('carList');
    const carItemTemplate = document.getElementById('carItemTemplate').content;

    const cars = [
        { name: "Taxi", fee: "₹3000/day", rating: "4.5", color: "White", img: "Images/car1.jpg" },
        { name: "Taxi", fee: "₹2850/day", rating: "4.7", color: "Yellow", img: "Images/car2.jpg" },
        { name: "Taxi", fee: "₹3750/day", rating: "4.9",color:"Yellow", img: "Images/car3.jpg" },
        { name: "Mahindra bolero", fee: "₹3150/day", rating: "4.4",color:"Grey", img: "Images/car4.jpg" },
        { name: "Mahindra bolero", fee: "₹2925/day", rating: "4.6",color:"Black", img: "Images/car5.jpg" },
        { name: "Mahindra bolero", fee: "₹4500/day", rating: "4.8",color:"Yellow", img: "Images/car6.jpg" },
        { name: "Mahindra bolero", fee: "₹4875/day", rating: "4.9",color:"White", img: "Images/car7.jpg" },
        { name: "Bolero", fee: "₹4650/day", rating: "4.7",color:"White", img: "Images/car8.jpg" },
        { name: " Bolero", fee: "₹2625/day", rating: "4.3",color:"Black", img: "Images/car9.jpg"},
        { name: "Bolero", fee: "₹2700/day", rating: "4.4",color:"Black", img: "Images/car10.jpg" },
        { name: " Bolero", fee: "₹2775/day", rating: "4.2",color:"White", img: "Images/car11.jpg" },
        { name: "Car", fee: "₹2925/day", rating: "4.5",color:"Red", img: "Images/car12.jpg" },
        { name: "Bolero", fee: "₹3075/day", rating: "4.6",color:"White", img: "Images/car13.jpg" },
        { name: "  Bolero", fee: "₹5250/day", rating: "4.9",color:"Grey", img: "Images/car14.jpg" },
        { name: "Bolero", fee: "₹4800/day", rating: "4.8",color:"Red", img: "Images/car15.jpg" },
        { name: "Car", fee: "₹5100/day", rating: "4.7",color:"White", img: "Images/car16.jpg" },
        { name: "Mahindra Bolero", fee: "₹5625/day", rating: "4.8",color:"White", img: "Images/car17.jpg" },
        { name: "Car", fee: "₹5400/day", rating: "4.7",color:"Yellow", img: "Images/car18.jpg" },
        { name: "Taxi", fee: "₹4950/day", rating: "4.6",color:"Yellow", img: "Images/car19.jpg" },
        { name: "Taxi", fee: "₹4725/day", rating: "4.5",color:"Yellow", img: "Images/car20.jpg" },
        { name: "Car", fee: "₹5025/day", rating: "4.7",color:"Black", img: "Images/car21.jpg" },
        { name: "Car", fee: "₹6000/day", rating: "4.9",color:"White", img: "Images/car22.jpg" },
        { name: "Taxi", fee: "₹6375/day", rating: "4.8",color:"Yellow", img: "Images/car23.jpg" },
        { name: "Car", fee: "₹6750/day", rating: "4.9",color:"White", img: "Images/car24.jpg" },
        { name: " Car", fee: "₹3750/day", rating: "4.6",color:"White", img: "Images/car25.jpg" },
        { name: "Car", fee: "₹3600/day", rating: "4.7",color:"Yellow", img: "Images/car26.jpg" },
        { name: "Car", fee: "₹4125/day", rating: "4.8",color:"Yellow", img: "Images/car27.jpg" },
        { name: " Taxi", fee: "₹3975/day", rating: "4.6",color:"Yellow", img: "Images/car28.jpg" },
        { name: "Taxi", fee: "₹3375/day", rating: "4.5",color:"Yellow", img: "Images/car29.jpg" },
        { name: "Taxi", fee: "₹4350/day", rating: "4.7",color:"Red", img: "Images/car30.jpg" },
        { name: "Taxi", fee: "₹3450/day", rating: "4.4",color:"Red", img: "Images/car31.jpg" },
        { name: "Taxi", fee: "₹3525/day", rating: "4.3",color:"Yellow", img: "Images/car32.jpg" },
        { name: "Taxi", fee: "₹3600/day", rating: "4.4",color:"Yellow", img: "Images/car33.jpg" },
        { name: " Taxi", fee: "₹3750/day", rating: "4.5",color:"White", img: "Images/car34.jpg" },
        { name: "Taxi", fee: "₹3825/day", rating: "4.6",color:"Yellow", img: "Images/car35.jpg" },
        { name: "Taxi", fee: "₹6375/day", rating: "4.9",color:"Yellow", img: "Images/car36.jpg" },
        { name: " Car", fee: "₹5625/day", rating: "4.8",color:"White", img: "Images/car37.jpg" },
        { name: " Car", fee: "₹5850/day", rating: "4.7",color:"White", img: "Images/car38.jpg" },
        { name: "Taxi", fee: "₹6150/day", rating: "4.8",color:"Yellow", img: "Images/car39.jpg" },
        { name: "Mahindra bolero", fee: "₹6000/day", rating: "4.9",color:"Blue", img: "Images/car40.jpg" },
        { name: " Mahindra bolero", fee: "₹5925/day", rating: "4.8",color:"Black", img: "Images/car41.jpg" },
        { name: "Taxi", fee: "₹7125/day", rating: "4.9",color:"Yellow", img: "Images/car42.jpg" },
        { name: "Taxi", fee: "₹7500/day", rating: "4.8",color:"Yellow", img: "Images/car43.jpg" },
        { name: "Taxi", fee: "₹3300/day", rating: "4.7",color:"Yellow", img: "Images/car44.jpg" },
        { name: "Bolero", fee: "₹3900/day", rating: "4.6",color:"Black", img: "Images/car45.jpg" },
        { name: "Bolero", fee: "₹4500/day", rating: "4.8",color:"Mist", img: "Images/car46.jpg" },
        { name: " Bolero", fee: "₹4650/day", rating: "4.7",color:"Green", img: "Images/car47.jpg" },
        { name: " Bolero", fee: "₹4050/day", rating: "4.5",color:"Grey", img: "Images/car48.jpg" },
        { name: " Bolero", fee: "₹4425/day", rating: "4.6",color:"White", img: "Images/car49.jpg" },
        { name: "Bolero", fee: "₹4200/day", rating: "4.7", color: "Black", img: "Images/car50.jpg" },
    ];
    

    let cart = []; 
    let cartCount = 0; 

    function displayCars(carArray) {
        carList.innerHTML = ''; 
        carArray.forEach(car => {
            const carItem = carItemTemplate.cloneNode(true);
            carItem.querySelector('h2').textContent = car.name;
            carItem.querySelector('.car-fee').textContent = car.fee;
            carItem.querySelector('.car-rating').textContent = car.rating;
            carItem.querySelector('.car-color').textContent = car.color;
            carItem.querySelector('img').src = car.img;

            // Add to Cart button
            carItem.querySelector('.add-to-cart-btn').addEventListener('click', function() {
                addToCart(car.name, car.fee);
            });

            carList.appendChild(carItem);
        });
    }

    // Function to add car to cart
    function addToCart(carName, carFee) {
        cart.push({ name: carName, fee: parseFloat(carFee.replace('₹', '').replace('/day', '').trim()) });
        cartCount++;
        document.getElementById('cartCount').innerText = cartCount;
        updateCart();
        showPopup(`${carName} has been added to your cart!`);
    }

    function updateCart() {
        const cartItemsElement = document.getElementById('cartItems');
        const cartTotalElement = document.getElementById('cartTotal');
        cartItemsElement.innerHTML = ''; 
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.fee}`;
            cartItemsElement.appendChild(li);
            total += item.fee;
        });

        cartTotalElement.textContent = `Total: ₹${total.toFixed(2)}`;
    }

    function showPopup(message) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = message;

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('fade-out');
            popup.addEventListener('animationend', () => popup.remove());
        }, 2500);
    }
    function searchCars() {
        const searchValue = document.getElementById('searchBar').value.toLowerCase().trim();
        const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchValue));
        displayCars(filteredCars);
    }

    document.getElementById('searchBar').addEventListener('keyup', searchCars);
    displayCars(cars);
});