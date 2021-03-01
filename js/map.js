function mapLoad(){
    //define the coordinate
    var latLng = [41.789649, -87.599702]; 
    //set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    //define two tile layer variables
    var grayscale = L.tileLayer(mbUrl, {
        id: 'mapbox/light-v9', 
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr}
    );
    var streets = L.tileLayer(mbUrl, {
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr}
    );
    //define map object
    var map=L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });
    //add tile layers to base layer object
    //add to the map
    //add a marker with pop-up
    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
    //add a nifty click event
    var popup = L.popup();
    function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent("You clikced the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
}