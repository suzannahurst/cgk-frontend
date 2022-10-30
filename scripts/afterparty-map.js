// MAP

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

import { aps } from "./ap-data.js";

const showMissingAPMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("fair not found");
};

let map, infoWindow;

function initMap() {
  let ap = [];

  // FETCH FUNCTIONALITY FOR WHEN CONNECTED TO STRAPI

  // const fetchAPs = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://coney-golden-key.herokuapp.com/api/after-parties?populate=*",
  //     );
  //     if (!response.ok) throw response;
  //     const aps = await response.json();

  //     return aps;
  //   } catch (error) {
  //     console.log("error", error);
  //     throw error;
  //   }
  // };

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
    general: {
      icon: {
        url: iconBase + "marker-yellow.png",
        scaledSize: new google.maps.Size(40, 60),
      },
    },
  };

  let locations = [];

  const createAPs = async (aps) => {
    // const afterparties = await fetchAPs();

    aps.map((afterparty) => {
      const {
        name,
        description,
        latitude,
        longitude,
        url,
        type,
        OpeningHours,
      } = afterparty.attributes;

      const location = {
        position: new google.maps.LatLng(latitude, longitude),
        // position: new google.maps.LatLng(51.51202, -0.09088),
        type: "general",
        content: `<div id="content" class="infoContent"><h3 class="adventureName">${name} </h3>
        <h4>${type} | ${OpeningHours}</h4>
 
     <div class="contentItem"><div class="contentWrapper">
     
        <p class="adventureInfo" >${description}</p></div></div><div class="contentItem lower"><a href="${url}"><h4 class="info">More info </h4></a>
        </div>
        </div>`,
      };
      locations.push(location);
      // console.log(locations);
    });
    showAllMarkers();
  };

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

  createAPs(aps);

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
