// MAZE MAP

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
    kids: {
      icon: {
        url: iconBase + "marker-purple.png",
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
        url: iconBase + "marker-black.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
    adventure: {
      icon: {
        url: iconBase + "marker-gold.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
  };

  let locations = [];

  // TODO create error handle for new tags
  const createTags = (tags) => {
    const colors = [
      { id: 2, color: "green" },
      { id: 5, color: "pink" },
      { id: 6, color: "black" },
      { id: 7, color: "purple" },
      { id: 8, color: "gold" },
      { id: 9, color: "red" },
      { id: 10, color: "gold" },
      { id: 11, color: "gold" },
      { id: 12, color: "gold" },
      { id: 13, color: "gold" },
      { id: 14, color: "gold" },
    ];

    // A FUNCTION SHOULD HAVE ONE OBJECTIVE

    const wrapper = tags.data.map((tag) => {
      const colorToShow = colors.find(({ id }) => id === tag.id);
      const content = `<span class="maptag ${colorToShow.color}">${tag.attributes.name}</span>`;
      return content;
    });
    // console.log(wrapper);
    return wrapper.join("");
  };

  const createAdventures = async () => {
    const adventures = await fetchAdventures();
    adventures.data.map((adventure) => {
      const {
        name,
        lastEntry,
        description,
        after,
        logistics,
        tags,
        latitude,
        longitude,
        slug,
        type,
      } = adventure.attributes;
      console.log(type);
      const location = {
        position: new google.maps.LatLng(latitude, longitude),
        // position: new google.maps.LatLng(51.51202, -0.09088),
        type: type,
        content: `<div id="content" class="infoContent"><h3 class="adventureName">${name} </h3>
        <h4>Last entry: ${lastEntry}</h4><div class="contentItem"><div class="contentWrapper"><p class="adventureInfo" >${description}</p><br/><p class="adventureInfo" >${after}</p></div><img src="../assets/img/illustrations/info-door.png"></div><div class="contentItem lower"><div class="maptags">${createTags(
          tags,
        )}</div><a href="../adventures/${slug}.html"><h3 class="info">More info </h3></a></div></div>`,
      };
      locations.push(location);
      // console.log(locations);
    });
    showAllMarkers();
  };

  createAdventures();

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
