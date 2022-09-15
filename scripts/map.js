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
        url: iconBase + "marker-red.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    families: {
      icon: {
        url: iconBase + "marker-red.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    adults: {
      icon: {
        url: iconBase + "marker-red.png",
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
        `<h3 class="adventureName">The Fair of Topsy Turvy Power </h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        "<h3 >12:00-6:45pm</h3> " +
        '<p class="adventureInfo"></p>At the historic headquarters of London\'s city government, take the opportunity to venture into spaces not normally open to the public and discover unique and exciting activities and performances in every room.</p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/acrobat.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag">Free, drop in!</span></div>' +
        `<a href="../fairs/guildhall.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51796, -0.09479),
      type: "fair",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">The Fair of Tall and Short True Stories</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        "<h3 >12:00-7pm</h3> " +
        '<p class="adventureInfo"></p>There’s a story nestled in every nook, cranny and corner of the Fair of Tall and Small Stories, so lend an ear and listen up! </p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/band.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag">Free, drop in!</span></div>' +
        `<a href="../fairs/london-wall.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51384, -0.09835),
      type: "fair",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">The Fair of Pathways and Passage</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        "<h3 >12:00-9:30pm</h3> " +
        '<p class="adventureInfo"></p>Experience interactive performances, playful installations, music, dance and circus exploring migration stories, unexpected journeys and chance encounters between strangers. </p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/juggler.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag">Free, drop in!</span></div>' +
        `<a href="../fairs/st-pauls.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51202, -0.09088),
      type: "families",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">Animals in the City </h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        '<p class="adventureInfo" >To begin your adventure, find the red door at Bloomberg Arcade, on Cannon Street Side. Don\'t forget your smartphone. </p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag purple">Age guidance: 6+</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-1.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51702, -0.09015),
      type: "adults",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">Epic Investment</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        "<p class=\"adventureInfo\" >To begin, find the red door at Coleman Street Gardens, in front of Girdler's Company.  Don't forget your smartphone (and headphones if you have them!)</p>" +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag black">Over-18s only</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-2.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51217, -0.09831),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">The Future Gondolier</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        "<p class=\"adventureInfo\" >To begin, find the red door at Peter's Hill.  Don't forget your smartphone (and headphones if you have them!)</p>" +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag red">No step-free access</span></div>' +
        `<a href="../adventures/door-3.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51449, -0.0803),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">Daniel Mendoza's Art of Boxing</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        "<p class=\"adventureInfo\" >To begin, find the red door at 30 St Mary's Axe (The Gerkin), on the east side.  Don't forget your smartphone (and headphones if you have them!)</p>" +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-4.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51424, -0.10332),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">Undercover with Moll Cutpurse</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        '<p class="adventureInfo" >To begin, find the red door across the road from City Thameslink. Don\'t forget your smartphone (and headphones if you have them!)</p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-5.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51705, -0.09275),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">Ghost Hunting with Brian</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        '<p class="adventureInfo" >To begin, find the red door in Aldermenbary Square.  Don\'t forget your smartphone (and headphones if you have them!)</p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-6.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51349, -0.08808),
      type: "families",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">The Artful Dodges Again</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        '<p class="adventureInfo" >To begin your adventure, find the red door in front of the steps of The Royal Exchange. Don\'t forget your smartphone!</p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag purple">Age guidance: 6+</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-7.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.52006, -0.09683),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">The Smashing Rock Sisters</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        '<p class="adventureInfo" >To begin, find the red door in the square, opposite Barbican Tube at the entrance to Barbican Estate. Don\'t forget your smartphone (and headphones if you have them!)</p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-8.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51018, -0.08593),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">A Resting Place</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        '<p class="adventureInfo" >To begin your adventure, find the red door at the open square in front of Monument.  Don\'t forget your smartphone (and headphones if you have them!)</p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag red">No step-free access</span></div>' +
        `<a href="../adventures/door-9.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.50811, -0.07594),
      type: "adults",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">Share Mile</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        '<p class="adventureInfo" >To begin, find the red door near the visitor entrance to the Tower of London. Please note that this route is 18+ only. Don\'t forget your smartphone, (and headphones if you have them!)</p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag black">Over-18s only</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-10.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51785, -0.08643),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">Phillis Arrives in London! Read All About It!</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        '<p class="adventureInfo" >To begin, find the red door at Finsbury Circus Gardens.  Don\'t forget your smartphone (and headphones if you have them!)</p>' +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-11.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
    },
    {
      position: new google.maps.LatLng(51.51909, -0.09028),
      type: "everyone",
      content:
        '<div id="content" class="infoContent">' +
        `<h3 class="adventureName">Mysteries of the City</h3>` +
        '<div class="contentItem">' +
        '<div class="contentWrapper">' +
        "<p class=\"adventureInfo\" >To begin, find the red door at St Bartholemew's Gatehouse.  Don't forget your smartphone (and headphones if you have them!)</p>" +
        "</div>" +
        '<img src="../assets/img/illustrations/info-door.png">' +
        "</div>" +
        '<div class="contentItem lower">' +
        '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
        `<a href="../adventures/door-12.html"><h3 class="info">More info </h3></a>` +
        "</div>" +
        "</div>",
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
