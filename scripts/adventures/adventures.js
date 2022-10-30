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
    console.log(JSON.stringify(adventures));
    return adventures;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
fetchAdventures();

export const getAdventure = (id) => {
  const adventureReq = new Request(
    `https://coney-golden-key.herokuapp.com/api/adventures/${id}?populate=*`,
  );

  fetch(adventureReq, {
    headers: new Headers({
      // "X-Content-Type-Options": "nosniff",
      "Content-Type": "application/json",
    }),
  })
    .then((resp) => {
      if (resp.ok) {
        // console.log("resp getAdventure", resp);
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then(displayAdventure)
    .catch(showMissingAdventureMsg);
};

export const showMissingAdventureMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("fair not found");
};

export const displayAdventure = (adventure) => {
  console.log(adventure.data.attributes.name);
  const {
    name,
    openingTime,
    lastEntry,
    after,
    logistics,
    slug,
    startingInstruction,
    description,
    keyinfo,
    tags,
    tube,
    gm,
  } = adventure.data.attributes;

  // const { url } = image.data.attributes;
  const adventureInfoMount = document.getElementById("adventureInfoMount");
  const instructionsMount = document.getElementById("instructionsMount");
  const locationMount = document.getElementById("locationMount");
  const tagsMount = document.getElementById("tagsMount");

  // DISPLAY INFO

  adventureInfoMount.innerHTML = `
  <p class="maintext" ><strong> ${logistics}</strong></p>
  <p class="maintext" >Opening times: ${openingTime}. Last entry: ${lastEntry}</p>
   `;

  instructionsMount.innerHTML = `
  <h3 class="subtitle">About this adventure</h3> 
   <p class="maintext" > ${description}</p>
    <p class="maintext">${after}</p>
   `;

  let tag;

  tags.data.map((tg) => {
    if (tg.attributes.name) {
      tag = document.createElement("span");
      tag.classList.add("tag");
      tag.innerHTML = tg.attributes.name;

      tagsMount.appendChild(tag);
    }
  });
  // DISPLAY TRAVEL
  locationMount.innerHTML = `
  <p> ${startingInstruction} </p>
     <p class="maintext">Show on <a href="${gm}" target="_blank" class="highlighted">Google Maps</a></p>
  <p>Nearest station: ${tube} </p>`;

  // DISPLAY PROGRAMME
  //   programmeInfoMount.innerHTML = converter.makeHtml(programme);
};

const findId = (pathname) => {
  let adventureslug = pathname.replace("/adventures/", "");
  adventureslug = adventureslug.replace(".html", "");
  console.log(adventureslug);
  const adventures = [
    { slug: "door-1", id: 6 },
    { slug: "door-2", id: 7 },
    { slug: "door-3", id: 8 },
    { slug: "door-4", id: 9 },
    { slug: "door-5", id: 10 },
    { slug: "door-6", id: 11 },
    { slug: "door-7", id: 12 },
    { slug: "door-8", id: 13 },
    { slug: "door-9", id: 14 },
    { slug: "door-10", id: 15 },
    { slug: "door-11", id: 16 },
    { slug: "door-12", id: 17 },
  ];
  const adventure = adventures.find(({ slug }) => slug === adventureslug);
  return adventure.id;
};

const pathname = window.location.pathname;
getAdventure(findId(pathname));
