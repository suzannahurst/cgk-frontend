// MAP

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.51382754700306, lng: -0.09138173055736436 },
    zoom: 14,
    mapId: "116b56ec96574c87",
    // zoomControl: true,
    mapTypeControl: false,
    // scaleControl: boolean,
    streetViewControl: false,
    // rotateControl: boolean,
    // fullscreenControl: false,
  });

  let iconBase = "./../assets/img/markers/";

  const icons = {
    fair: {
      icon: {
        url: iconBase + "marker-yellow.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    everyone: {
      icon: {
        url: iconBase + "marker-pink.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    families: {
      icon: {
        url: iconBase + "marker-pink.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    adults: {
      icon: {
        url: iconBase + "marker-pink.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
  };

  const locations = [
    {
      position: new google.maps.LatLng(51.51585, -0.0919),
      type: "fair",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        "<h3>The Fair of Topsy Turvy Power </h3>" +
        '<p class="">12:00-6:45pm </p>' +
        '<div class="maptags"><span class="maptag">Free, drop in!</span></div>' +
        `<a href="../fairs/guildhall.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../fairs/guildhall.html"><img src="../assets/img/illustrations/acrobat.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51796, -0.09479),
      type: "fair",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        "<h3>The Fair of Tall and Short True Stories</h3>" +
        '<p class="">12:00-7pm</p>' +
        '<div class="maptags"><span class="maptag">Free, drop in!</span></div>' +
        `<a href="../fairs/london-wall.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../fairs/london-wall.html"><img src="../assets/img/illustrations/band.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51384, -0.09835),
      type: "fair",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        "<h3>The Fair of Pathways and Passage</h3>" +
        '<p class="">12:00-9:30pm</p>' +
        '<div class="maptags"><span class="maptag">Free, drop in!</span></div>' +
        `<a href="../fairs/st-pauls.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../fairs/st-pauls.html"><img src="../assets/img/illustrations/juggler.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51202, -0.09088),
      type: "families",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">Animals in the City </h3>` +
        '<p class="">Find the red door at Bloomberg Arcade, on Cannon Street Side. </p>' +
        '<div class="maptags"><span class="maptag">Just for families</span></div>' +
        `<a href="../adventures/door-1.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-1.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51702, -0.09015),
      type: "adults",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">Epic Investment </h3>` +
        '<p class="">Find the red door at Coleman Street Gardens, in front of Girdler\'s Company </p>' +
        '<div class="maptags"><span class="maptag">Just for adults</span></div>' +
        '<a href="../adventures/door-2.html"><h3 class="info">More info</h3></a>' +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-2.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51217, -0.09831),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">Future Gondolier </h3>` +
        '<p class="">Find the red door at Peter\'s Hill </p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        `<a href="../adventures/door-3.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-3.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51449, -0.0803),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">Daniel Mendoza</h3>` +
        '<p class="">Find the red door at 30 St Mary\'s Axe (The Gerkin), on the east side. </p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        `<a href="../adventures/door-4.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-4.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51424, -0.10332),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        '<h3 class="adventureName">Moll Cutpurse and Ann Duck</h3>' +
        '<p class="">Find the red door across the road from City Thameslink </p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        `<a href="../adventures/door-5.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-5.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51705, -0.09275),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">Ghost Hunting with Brian</h3>` +
        '<p class=""> Find the red door at Aldermenbary Square </p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        `<a href="../adventures/door-6.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-6.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51349, -0.08808),
      type: "families",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">The Artful Dodges Again </h3>` +
        '<p class="">Find the red door in the square outside the main entrance of The Royal Exchange </p>' +
        '<div class="maptags"><span class="maptag">Just for families</span></div>' +
        `<a href="../adventures/door-7.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-7.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.52006, -0.09683),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">The Smashing Rock Sisters </h3>` +
        '<p class="">Find the red door in the square opposite Barbican Tube at the entrance to Barbican Estate</p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        `<div><a href="../adventures/door-8.html"><h3 class="info">More info</h3></a></div>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-8.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51018, -0.08593),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">A Resting Place </h3>` +
        '<p class="">Find the red door at the open square in front of Monument</p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        `<a href="../adventures/door-9.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-9.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.50811, -0.07594),
      type: "adults",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">Mariam the 2040 Tour Guide </h3>` +
        '<p class="">Tower of London</p>' +
        '<div class="maptags"><span class="maptag">Just for adults</span></div>' +
        `<a href="../adventures/door-10.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-10.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51785, -0.08643),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">Phyllis Wheatley  </h3>` +
        '<p class="">Find the red door at Finsbury Circus Gardens</p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        `<a href="../adventures/door-11.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-11.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
    {
      position: new google.maps.LatLng(51.51909, -0.09028),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        '<div class="contentItem text">' +
        `<h3 class="adventureName">Mysteries of the City </h3>` +
        '<p class="">Find the red door at St Bartholemew\'s Gatehouse</p>' +
        '<div class="maptags"><span class="maptag">Suitable for all</span></div>' +
        `<a href="../adventures/door-12.html"><h3 class="info">More info</h3></a>` +
        "</div>" +
        '<div class="contentItem">' +
        '<a href="../adventures/door-12.html"><img src="../assets/img/illustrations/info-door.png"></a>' +
        "</div>" +
        " </div>",
    },
  ];

  // TODO change it to follow this logic https://developers.google.com/maps/documentation/javascript/examples/marker-remove
  let activeMarkers = [];

  const showActiveMarkers = () => {
    activeMarkers.map((activeMarker) => {
      const marker = new google.maps.Marker({
        position: activeMarker.position,
        icon: icons[activeMarker.type].icon,
        map: map,
      });
      const placewindow = new google.maps.InfoWindow({
        content: activeMarker.content,
      });
      marker.addListener("click", () => {
        placewindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    });
  };

  const clearMarkers = () => {
    if (activeMarkers) {
      activeMarkers = [];
    }
  };

  let currentInfoWindow = null;

  const showAllMarkers = () => {
    locations.map((location) => {
      // console.log("location", location);
      const marker = new google.maps.Marker({
        position: location.position,
        icon: icons[location.type].icon,
        map: map,
      });
      const placewindow = new google.maps.InfoWindow({
        content: location.content,
      });

      marker.addListener("click", () => {
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

  // Functionality for showing your own location

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
