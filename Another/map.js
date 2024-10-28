let map, directionsService, directionsRenderer;

function initMap() {
    // Initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    // Initialize the Directions service and renderer
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Set up the autocomplete fields
    const sourceInput = document.getElementById('source');
    const destinationInput = document.getElementById('destination');
    const autocompleteSource = new google.maps.places.Autocomplete(sourceInput);
    const autocompleteDestination = new google.maps.places.Autocomplete(destinationInput);

    // Add listener for place changes
    autocompleteSource.addListener('place_changed', () => calculateRoute());
    autocompleteDestination.addListener('place_changed', () => calculateRoute());

    // Optionally, try to get the current location and center the map on it
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            map.setCenter(pos);
        });
    }
}

function calculateRoute() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    if (source && destination) {
        const request = {
            origin: source,
            destination: destination,
            travelMode: 'DRIVING'
        };

        directionsService.route(request, (result, status) => {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            } else {
                alert('Could not calculate route: ' + status);
            }
        });
    }
}
