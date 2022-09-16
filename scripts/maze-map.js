// export const fetchAdventures = async () => {
//   try {
//     const response = await fetch(
//       "https://coney-golden-key.herokuapp.com/api/adventures?populate=*",
//     );
//     if (!response.ok) throw response;
//     const adventures = await response.json();
//     console.log(adventures);
//     return adventures;
//   } catch (error) {
//     console.log("error", error);
//     throw error;
//   }
// };

// MAP

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

const showMissingAdventureMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("fair not found");
};

let map, infoWindow;

function initMap() {
  let adv = [];

  const fetchAdventures = async () => {
    try {
      const response = await fetch(
        "https://coney-golden-key.herokuapp.com/api/adventures?populate=*",
      );
      if (!response.ok) throw response;
      const adventures = await response.json();
      // console.log("adventures", adventures);
      return adventures;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  map = new google.maps.Map(document.getElementById("mazeMap"), {
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
    everyone: {
      icon: {
        url: iconBase + "marker-pink.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    families: {
      icon: {
        url: iconBase + "marker-purple.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    adults: {
      icon: {
        url: iconBase + "marker-black.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    adventure: {
      icon: {
        url: iconBase + "marker-purple.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
  };

  let locations = [];

  // TODO create tags fn
  const createTags = (tags) => {
    const colors = [
      { id: 2, color: "green" },
      { id: 5, color: "pink" },
      { id: 6, color: "black" },
      { id: 7, color: "purple" },
      { id: 8, color: "gold" },
      { id: 9, color: "red" },
    ];
    const wrapper = document.createElement("div");
    wrapper.classList.add("maptags");

    tags.data.map((tag) => {
      const colorToShow = colors.find(({ id }) => id === tag.id);
      const content = `<span class="maptag ${colorToShow.color}">${tag.attributes.name}</span>`;

      wrapper.innerHTML = content;
      // return `<span class="maptag ${colorToShow.color}">${tag.attributes.name}</span>`;
    });
    return wrapper;
  };

  const createAdventures = async () => {
    const adventures = await fetchAdventures();
    adventures.data.map((adventure) => {
      const { name, keyinfo, tags, latitude, longitude, slug, type } =
        adventure.attributes;
      const location = {
        position: new google.maps.LatLng(latitude, longitude),
        // position: new google.maps.LatLng(51.51202, -0.09088),
        type: "adventure",
        content:
          '<div id="content" class="infoContent">' +
          `<h3 class="adventureName">${name} </h3>` +
          '<div class="contentItem">' +
          '<div class="contentWrapper">' +
          `<p class="adventureInfo" >${keyinfo} </p>` +
          "</div>" +
          '<img src="../assets/img/illustrations/info-door.png">' +
          "</div>" +
          '<div class="contentItem lower">' +
          `${createTags(tags)}` +
          `<a href="../adventures/${slug}.html"><h3 class="info">More info </h3></a>` +
          "</div>" +
          "</div>",
      };
      locations.push(location);
      // console.log(locations);
    });
    showAllMarkers();
  };

  createAdventures();

  // const locations = [
  //   {
  //     position: new google.maps.LatLng(51.51202, -0.09088),
  //     type: "families",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">Animals in the City </h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       '<p class="adventureInfo" >To begin your adventure, find the red door at Bloomberg Arcade, on Cannon Street Side. Don\'t forget your smartphone. </p>' +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag purple">Age guidance: 6+</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-1.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51702, -0.09015),
  //     type: "adults",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">Epic Investment</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       "<p class=\"adventureInfo\" >To begin, find the red door at Coleman Street Gardens, in front of Girdler's Company.  Don't forget your smartphone (and headphones if you have them!)</p>" +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag black">Over-18s only</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-2.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51217, -0.09831),
  //     type: "everyone",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">The Future Gondolier</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       "<p class=\"adventureInfo\" >To begin, find the red door at Peter's Hill.  Don't forget your smartphone (and headphones if you have them!)</p>" +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag red">No step-free access</span></div>' +
  //       `<a href="../adventures/door-3.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51449, -0.0803),
  //     type: "everyone",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">Daniel Mendoza's Art of Boxing</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       "<p class=\"adventureInfo\" >To begin, find the red door at 30 St Mary's Axe (The Gerkin), on the east side.  Don't forget your smartphone (and headphones if you have them!)</p>" +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-4.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51424, -0.10332),
  //     type: "everyone",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">Undercover with Moll Cutpurse</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       '<p class="adventureInfo" >To begin, find the red door across the road from City Thameslink. Don\'t forget your smartphone (and headphones if you have them!)</p>' +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-5.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51705, -0.09275),
  //     type: "everyone",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">Ghost Hunting with Brian</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       '<p class="adventureInfo" >To begin, find the red door in Aldermenbary Square.  Don\'t forget your smartphone (and headphones if you have them!)</p>' +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-6.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51349, -0.08808),
  //     type: "families",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">The Artful Dodges Again</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       '<p class="adventureInfo" >To begin your adventure, find the red door in front of the steps of The Royal Exchange. Don\'t forget your smartphone!</p>' +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag purple">Age guidance: 6+</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-7.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.52006, -0.09683),
  //     type: "everyone",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">The Smashing Rock Sisters</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       '<p class="adventureInfo" >To begin, find the red door in the square, opposite Barbican Tube at the entrance to Barbican Estate. Don\'t forget your smartphone (and headphones if you have them!)</p>' +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-8.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51018, -0.08593),
  //     type: "everyone",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">A Resting Place</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       '<p class="adventureInfo" >To begin your adventure, find the red door at the open square in front of Monument.  Don\'t forget your smartphone (and headphones if you have them!)</p>' +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag red">No step-free access</span></div>' +
  //       `<a href="../adventures/door-9.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.50811, -0.07594),
  //     type: "adults",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">Share Mile</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       '<p class="adventureInfo" >To begin, find the red door near the visitor entrance to the Tower of London. Please note that this route is 18+ only. Don\'t forget your smartphone, (and headphones if you have them!)</p>' +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag black">Over-18s only</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-10.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51785, -0.08643),
  //     type: "everyone",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">Phillis Arrives in London! Read All About It!</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       '<p class="adventureInfo" >To begin, find the red door at Finsbury Circus Gardens.  Don\'t forget your smartphone (and headphones if you have them!)</p>' +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-11.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  //   {
  //     position: new google.maps.LatLng(51.51909, -0.09028),
  //     type: "everyone",
  //     content:
  //       '<div id="content" class="infoContent">' +
  //       `<h3 class="adventureName">Mysteries of the City</h3>` +
  //       '<div class="contentItem">' +
  //       '<div class="contentWrapper">' +
  //       "<p class=\"adventureInfo\" >To begin, find the red door at St Bartholemew's Gatehouse.  Don't forget your smartphone (and headphones if you have them!)</p>" +
  //       "</div>" +
  //       '<img src="../assets/img/illustrations/info-door.png">' +
  //       "</div>" +
  //       '<div class="contentItem lower">' +
  //       '<div class="maptags"><span class="maptag pink">Age guidance: 8+</span><span class="maptag green">Step-free access</span></div>' +
  //       `<a href="../adventures/door-12.html"><h3 class="info">More info </h3></a>` +
  //       "</div>" +
  //       "</div>",
  //   },
  // ];

  // TODO change it to follow this logic https://developers.google.com/maps/documentation/javascript/examples/marker-remove

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
  // showAllMarkers();

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
