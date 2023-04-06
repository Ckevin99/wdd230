// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBBtWbjO9w-x3O-3BDiOm-QkYijHR4PqS0&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
    const uluru = { lat: 33.20, lng: -117.3243 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);