function howdy() {
    var inputValue = prompt("Please enter your first name: ")
    alert("Howdy " + inputValue);
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("God day!");
    } else {
        alert("Good evening!");
    }
}
/* function evalNumber(parameters){
    var inputValue = Number(prompt("Enter any five-digit number without commas"))
    if (inputValue % 2 == 0){
     alert(inputValue + " is an even number.")
    } else {
     alert(inputValue + " is not an even number.")
    }
} */
function evalNumber() {
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue)) { //if the input value is not a number,
        alert(inputValue + " is not a number.");
    } else if (inputValue.length != 5) { //if the length of the number is not 5,
        alert(inputValue + " is not a five-character entity.");
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.");
    } else {
        alert(inputValue + " is an odd number.")
    }
}
/*  } else if (Number.isInteger(inputValue) == false){
     //alert(inputValue + " is not an integer."); */
/*  } else if (inputValue.length > 6 || inputValue.length < 5){
       alert(inputValue + " is not a five or six-digit number.");
   } else if (inputValue.length == 6 && inputValue > 0){
       alert(inputValue + " is not a five-digit number."); */
function minOfDay() {
    var currentMinute = new Date().getHours() * 60 + new Date().getMinutes();
    alert("Current Minute of the Day: " + currentMinute);
}
function disappear() {
    var dropdown = document.getElementById('dog1')
    dropdown.style.display = "none";
}
function changeTitle() {
    let selectedElement = document.getElementById("table title");
    console.log(selectedElement);
    selectedElement.innerText = "POOPING Schedule";
}

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
function parentFunction() {
    let a = 1;
    function childFunction() {
        var b = a + 2;
        return b;
    };
    return childFunction();
}
function meow() {
    alert("Meooow");
}