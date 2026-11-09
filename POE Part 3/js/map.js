document.addEventListener('DOMContentLoaded', function () {

    console.log("VillaSerenita map script loaded");

    // Check if Leaflet loaded
    if (typeof L === 'undefined') {
        console.error("Leaflet has not loaded!");
        return;
    }

    // Check if map container exists
    const mapContainer = document.getElementById('map');

    if (!mapContainer) {
        console.error("Map container not found!");
        return;
    }

    // Create map
    const map = L.map('map').setView(
        [-26.2041, 28.0473],
        13
    );

    // Load OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([-26.2041, 28.0473])
        .addTo(map)
        .bindPopup('Welcome to VillaSerenita!')
        .openPopup();

    // Adjust map dimensions
    setTimeout(function () {
        map.invalidateSize();
    }, 300);

    console.log("VillaSerenita map initialized successfully!");

});
