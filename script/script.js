document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('welcomePopup').style.display = 'flex';
    }, 1000);

    window.closePopup = function() {
        document.getElementById('welcomePopup').style.display = 'none';
    }

    function initMap() {
        const centerLocation = { lat: -34.397, lng: 150.644 };

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: centerLocation,
        });

        const marker = new google.maps.Marker({
            position: centerLocation,
            map: map,
        });
    }

    if (typeof google !== 'undefined' && google.maps) {
        initMap();
    }
});

function initMap() {
    const centerLocation = { lat: -34.397, lng: 150.644 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: centerLocation,
    });

    const marker = new google.maps.Marker({
        position: centerLocation,
        map: map,
    });
}
