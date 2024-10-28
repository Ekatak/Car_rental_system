<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Current Location on Google Maps</title>
    <style>
    #map {
        height: 80vh;
        width: 100%;
    }

    #search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    #search-input {
        width: 300px;
        padding: 8px;
    }

    #search-button {
        padding: 8px;
        margin-left: 5px;
        cursor: pointer;
    }
    </style>
</head>

<body>
    <div id="map"></div>

    <div id="search-container">
        <input id="search-input" type="text" placeholder="Enter a destination" />
        <button id="search-button">Search</button>
    </div>

    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhtYq-lWCnuRjpLITyGge4Ucs2jssx_WU&callback=initMap&libraries=places">
    </script>

    <script>
    let map;
    let marker;

    function initMap() {
        const options = {
            zoom: 14,
            center: {
                lat: 0,
                lng: 0
            }
        };

        map = new google.maps.Map(document.getElementById('map'), options);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(pos);

                    marker = new google.maps.Marker({
                        position: pos,
                        map: map,
                        title: "You are here!"
                    });
                },
                () => {
                    handleLocationError(true, map.getCenter());
                }
            );
        } else {
            handleLocationError(false, map.getCenter());
        }

        document.getElementById('search-button').addEventListener('click', function() {
            searchLocation();
        });
    }

    function searchLocation() {
        const input = document.getElementById('search-input').value;

        if (!input) {
            alert('Please enter a location.');
            return;
        }

        const request = {
            query: input,
            fields: ['name', 'geometry', 'formatted_address', 'place_id'],
        };

        const service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                const place = results[0];

                map.setCenter(place.geometry.location);

                if (marker) {
                    marker.setMap(null);
                }

                marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    title: place.name
                });

                alert(`Found location: ${place.name}, ${place.formatted_address}`);
            } else {
                alert('Location not found. Please try another search.');
            }
        });
    }

    function handleLocationError(browserHasGeolocation, pos) {
        const infoWindow = new google.maps.InfoWindow({
            position: pos,
            content: browserHasGeolocation ?
                "Error: The Geolocation service failed." : "Error: Your browser doesn't support geolocation."
        });
        infoWindow.open(map);
    }
    </script>
</body>

</html>