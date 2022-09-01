// MAP

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("mazeMap"), {
    center: { lat: 51.513743, lng: -0.0958325 },
    zoom: 13,
    mapId: "116b56ec96574c87",
    // zoomControl: true,
    // mapTypeControl: boolean,
    // scaleControl: boolean,
    // streetViewControl: boolean,
    // rotateControl: boolean,
    // fullscreenControl: boolean,
  });

  let iconBase = "./../assets/img/markers/";

  const icons = {
    adventure: {
      icon: {
        url: iconBase + "adventure-marker.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
  };

  const locations = [
    {
      position: new google.maps.LatLng(51.51596415654087, -0.10630967216174751),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="content-item">' +
        "<h3>Tudor Adventure</h3>" +
        "<p>Family Friendly</p>" +
        "<p>Wheelchair accessible</p>" +
        `<a href="../adventures/tudor.html"><strong>Find out more</strong></a>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51335645826938, -0.08959207632630892),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="content-item">' +
        "<h3>Tudor Adventure</h3>" +
        "<p>Family Friendly</p>" +
        "<p>Wheelchair accessible</p>" +
        `<a href="../adventures/tudor.html"><strong>Find out more</strong></a>` +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51984594260593, -0.10259542547264745),
      type: "adventure",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem">' +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="content-item">' +
        "<h3>Tudor Adventure</h3>" +
        "<p>Family Friendly</p>" +
        "<p>Wheelchair accessible</p>" +
        `<a href="../adventures/tudor.html"><strong>Find out more</strong></a>` +
        "</div>" +
        " </div>",
    },
  ];

  // TODO change it to follow this logic https://developers.google.com/maps/documentation/javascript/examples/marker-remove

  const clearMarkers = () => {
    if (activeMarkers) {
      activeMarkers = [];
    }
  };

  let currentInfoWindow = null;

  const showAllMarkers = () => {
    locations.map((location) => {
      console.log("location", location);
      const marker = new google.maps.Marker({
        position: location.position,
        icon: icons[location.type].icon,
        map: map,
      });
      const placewindow = new google.maps.InfoWindow({
        content: location.content,
      });

      marker.addListener("click", () => {
        console.log("currentInfoWindow", currentInfoWindow);
        if (currentInfoWindow != null) {
          currentInfoWindow.close();
        }
        placewindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
        currentInfoWindow = placewindow;
      });
    });
  };

  showAllMarkers();

  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.getElementById("locateBtn");
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(
      navigator.geolocation.watchPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          const userMarker = new google.maps.Marker({
            icon: {
              path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
              fillColor: "#70b000",
              fillOpacity: 0.9,
              strokeWeight: 2,
              strokeColor: "#70b000",
              rotation: 40,
              scale: 6,
            },
            position: pos,
            map: map,
          });
          userMarker.setPosition(pos);
          userMarker.addListener("click", () => {
            placewindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
          });

          infoWindow.setPosition(pos);
          infoWindow.setContent("You are here.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
  google.maps.event.addListener(map, "click", function () {
    if (currentInfoWindow != null) {
      currentInfoWindow.close();
    }
  });
}

console.log(map);

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}

window.initMap = initMap;
