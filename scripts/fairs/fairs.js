// let showdown = require("showdown");
const showdown = window.showdown;
const converter = new showdown.Converter();

import { fetchArtists } from "../artists/artists.js";

export const fetchFairs = () => {
  const fairsReq = new Request(
    "https://coney-golden-key.herokuapp.com/api/fairs?populate=*",
  );

  fetch(fairsReq)
    .then((response) => response.json())
    .then((fairs) => {
      console.log(fairs);
      return fairs;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getFair = (id) => {
  const fairReq = new Request(
    `https://coney-golden-key.herokuapp.com/api/fairs/${id}?populate=*`,
  );

  fetch(fairReq)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then(displayFair)
    // .then((fair) => {
    //   console.log("fair", fair);
    // })
    .catch(showMissingFairMsg);
};

export const showMissingFairMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("fair not found");
};

export const displayFair = (fair) => {
  console.log(fair.data.attributes);
  const { name, directions, description, tags, programme, tube, gm, date } =
    fair.data.attributes;
  // const { url } = image.data.attributes;
  const fairInfoMount = document.getElementById("fairInfoMount");
  const travelInfoMount = document.getElementById("travelInfoMount");
  const programmeInfoMount = document.getElementById("programmeInfoMount");
  // const artistFeaturedMount = document.getElementById("artistFeaturedMount");

  // DISPLAY INFO

  // TODO add image
  // fairInfoMount.innerHTML = `<h2 class="title" id="fairTitle">${name}</h2>
  //     <img id="fairImg" class="fair-img hero" src="https://res.cloudinary.com/dcwl3hold/image/upload/v1661765161/${url}"/>
  //     <h3 class="location">Location: ${location}
  //     </h3>
  //     <p id="fairDescription" class="description">${description}</p>
  //     <div id="fairTags"></div>
  //  `;

  fairInfoMount.innerHTML = `
      <p id="fairDescription"  >${description}</p>
      <div id="fairTags"></div>

   `;

  let fairTags = document.getElementById("fairTags");
  let tag;
  console.log(tags.data);

  tags.data.map((tg) => {
    if (tg.attributes.name) {
      console.log("tag", tg);
      tag = document.createElement("span");
      tag.classList.add("tag");
      tag.innerHTML = tg.attributes.name;

      fairTags.appendChild(tag);
    }
  });
  // DISPLAY TRAVEL
  travelInfoMount.innerHTML = `
     <h3>When</h3>
  <p>${date}</p>
  <h3 >Where</h3>
  ${directions}
   <h3>Nearest tubes</h3>
   <p class="maintext"> ${tube} </p>`;

  // DISPLAY PROGRAMME
  programmeInfoMount.innerHTML = converter.makeHtml(programme);
};
//TODO - display dynamically  with markdown conversion

// DISPLAY ARTISTS

// TODO MAP OVER PROGRAMME?

//   const artistsToDisplay = [];
//   artists.map((artist) => {
//     artistsToDisplay.push(artist);
//     const li = document.createElement("li");
//     li.innerHTML = ` <li class="artist-item">
//           <a href="#">
//             <h4 class="artist-name">${artist.name}</h4>
//           </a>
//           <p class="artist-time">${artist.shows}</p>
//           <p>${artist.showname}</p>
//           <p><a href="./../artists/${artist.slug}.html" class="highlighted">
//               More info
//             </a></p>
//         </li>`;
//     artistFeaturedMount.append(li);
//   });
// };
