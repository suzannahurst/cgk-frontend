// let showdown = require("showdown");
const showdown = window.showdown;
const converter = new showdown.Converter();

// export const fetchAdventures = () => {
//   const adventuresReq = new Request(
//     "https://coney-golden-key.herokuapp.com/api/adventures?populate=*",
//   );

//   fetch(adventuresReq)
//     .then((response) => response.json())
//     .then((adventures) => {
//       console.log(adventures);
//       return adventures;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

export const fetchAdventures = async () => {
  try {
    const response = await fetch(
      "https://coney-golden-key.herokuapp.com/api/adventures?populate=*",
    );
    if (!response.ok) throw response;

    const adventures = await response.json();
    console.log(adventures);
    return adventures;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getAdventure = (id) => {
  const adventureReq = new Request(
    `https://coney-golden-key.herokuapp.com/api/adventures/${id}?populate=*`,
  );

  fetch(adventureReq)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then(displayAdventure)
    // .then((fair) => {
    //   console.log("fair", fair);
    // })
    .catch(showMissingAdventureMsg);
};

export const showMissingAdventureMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("fair not found");
};

export const displayAdventure = (adventure) => {
  console.log(adventure.data.attributes);
  const { location, description, tags, tube, gm } = adventure.data.attributes;

  // const { url } = image.data.attributes;
  const adventureInfoMount = document.getElementById("adventureInfoMount");
  const locationMount = document.getElementById("locationMount");
  const tagsMount = document.getElementById("tagsMount");
  const keyInfoMount = document.getElementById("keyInfoMount");
  // const artistFeaturedMount = document.getElementById("artistFeaturedMount");

  // DISPLAY INFO

  adventureInfoMount.innerHTML = `
   
      <p id="fairDescription" class="description">${description}</p>
      <div id="fairTags"></div>
   `;

  let tag;
  console.log(tags);

  tags.data.map((tg) => {
    console.log(tg);
    if (tg.attributes.name) {
      tag = document.createElement("span");
      tag.classList.add("tag");
      tag.innerHTML = tg.attributes.name;

      tagsMount.appendChild(tag);
    }
  });
  // DISPLAY TRAVEL
  locationMount.innerHTML = `<h3 class="subtitle">How to get there</h3>
      <p>Nearest tube: ${tube} </p>
      <p>Show on <a href="${gm}" target="_blank" class="highlighted">Google Maps</a></p>`;

  // DISPLAY PROGRAMME
  //   programmeInfoMount.innerHTML = converter.makeHtml(programme);
};
//TODO - display dynamically  with markdown conversion
