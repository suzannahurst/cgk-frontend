import { artists } from "./data.js";

export const getArtist = (idToFind) => {
  // const artistReq = new Request(
  //   `https://coney-golden-key.herokuapp.com/api/artists/${id}?populate=*`,
  // );

  // fetch(artistReq)
  //   .then((resp) => {
  //     if (resp.ok) {
  //       return resp.json();
  //     } else {
  //       throw new Error(resp.statusText);
  //     }
  //   })
  //   // .then((artist) => {
  //   //   console.log("artist", artist);
  //   // })
  //   .then(displayArtist)

  //   .catch(showMissingArtistMsg);
  const artist = artists.find(({ id }) => id === idToFind);

  displayArtist(artist);
};

export const showMissingArtistMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("artist not found");
};

export const displayArtist = (artist) => {
  console.log(artist);
  const { description, tags, image } = artist.attributes;

  const showInfoMount = document.getElementById("showInfoMount");
  const tagsMount = document.getElementById("tagsMount");
  const tagsSection = document.getElementById("tagsSection");
  const imgMount = document.getElementById("artistImgMount");

  const showdown = window.showdown;
  const converter = new showdown.Converter();

  showInfoMount.innerHTML = `
      <p id="showDescription" class="maintext">${converter.makeHtml(
        description,
      )}</p>
      `;

  // let tag;

  // if (tags.data.length === 0) {
  //   tagsSection.classList.add("hide");
  // } else {
  //   tags.data.map((tg) => {
  //     console.log(tg);
  //     if (tg.attributes.name) {
  //       tag = document.createElement("span");
  //       tag.classList.add("tag");
  //       tag.innerHTML = tg.attributes.name;

  //       tagsMount.appendChild(tag);
  //     }
  //   });
  // }

  // if (image.data === null) {
  //   imgMount.classList.add("hide");
  // } else {
  //   const imgUrl = image.data.map((img) => {
  //     return img.attributes.url;
  //   });
  //   imgMount.innerHTML = `<img id="artistImg" class="artist-img" src=${imgUrl}></img>`;
  // }
};

// TODO best way to dynamically populate artists per page

console.log(window.location.pathname);

const findId = (pathname) => {
  // debugger;
  let artistSlug = pathname.replace("/artists/", "");
  artistSlug = artistSlug.replace(".html", "");
  console.log(artistSlug);
  const artists = [
    { slug: "little-bulb", id: 1 },
    { slug: "judith-hope", id: 2 },
    { slug: "chivaree-circus", id: 3 },
    { slug: "walk-the-plank", id: 4 },
    { slug: "home-sweet-home", id: 5 },
    { slug: "brass-volcanoes", id: 6 },
    { slug: "old-time-sailors", id: 7 },
    { slug: "jelly-rollers", id: 8 },
    { slug: "layla-rosa", id: 9 },
    { slug: "artistry", id: 10 },
    { slug: "fubunation", id: 11 },
    { slug: "london-drawing", id: 12 },
    { slug: "the-poetry-takeaway", id: 13 },
    { slug: "thingumajig-theatre", id: 14 },
    { slug: "small-truth-theatre", id: 15 },
    { slug: "pirates-of-the-carabina", id: 16 },
    { slug: "she-koyokh", id: 17 },
    { slug: "grupo-lokito", id: 18 },
    { slug: "girum-bekele", id: 19 },
    { slug: "walk-the-plank-2", id: 20 },
    { slug: "emergency-exit-arts", id: 21 },
    { slug: "the-keyholders-cafe", id: 22 },
    { slug: "the-wheelabouts", id: 23 },
    { slug: "raze-collective", id: 24 },
    { slug: "global-grooves", id: 25 },
    { slug: "pepa-duarte-charly-monreal", id: 26 },
    { slug: "sol-cinema", id: 27 },
    { slug: "the-story-explorers", id: 28 },
    { slug: "moth-theatre", id: 29 },
    { slug: "100-keys", id: 30 },
    { slug: "play-disrupt", id: 31 },
    { slug: "katy-cawkwell", id: 32 },
    { slug: "spare-tyre", id: 33 },
    { slug: "cocoa-butter", id: 34 },
    { slug: "den-signal", id: 35 },
    { slug: "emma", id: 36 },
    { slug: "gemma-brockis", id: 37 },
    { slug: "high-rise", id: 38 },
    { slug: "jony-easterby", id: 39 },
    { slug: "kirsty-harris", id: 40 },
    { slug: "las-theatre", id: 41 },
    { slug: "michelle-mc-mahon-and-dinah-mullen", id: 42 },
    { slug: "poltergeist-theatre", id: 43 },
    { slug: "ruth-sutcliffe", id: 44 },
    { slug: "27-degrees", id: 45 },
    { slug: "the-red-thread", id: 46 },
    { slug: "walk-the-plank-and-chivaree-circus", id: 47 },
    { slug: "shotgun-carousel", id: 48 },
    { slug: "we-are-londoners", id: 49 },
    ,
  ];
  const artist = artists.find(({ slug }) => slug === artistSlug);

  return artist.id;
};

const pathname = window.location.pathname;
getArtist(findId(pathname));
