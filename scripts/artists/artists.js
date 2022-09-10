// scripts/index.js
export const fetchArtists = () => {
  const artistsReq = new Request(
    "https://coney-golden-key.herokuapp.com/api/artists",
  );

  fetch(artistsReq)
    .then((response) => response.json())
    .then((artists) => {
      console.log(artists);
      return artists;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getArtist = (id) => {
  const artistReq = new Request(
    `https://coney-golden-key.herokuapp.com/api/artists/${id}?populate=*`,
  );

  fetch(artistReq)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then(displayArtist)
    // .then((artist) => {
    //   console.log("artist", artist);
    // })
    .catch(showMissingArtistMsg);
};

export const showMissingArtistMsg = (msg) => {
  document.getElementById("not-found").style =
    "display: flex; display: -webkit-box; display: -ms-flexbox;";
  document.getElementById("err-msg").innerHTML = msg;
  // console.log("artist not found");
};

export const displayArtist = (artist) => {
  const {
    name,
    showname,
    showtimes,
    description,
    fair,
    biog,
    slug,
    tags,
    showlocation,
    image,
  } = artist.data.attributes;
  const fairName = fair.data.attributes.name;
  const fairSlug = fair.data.attributes.slug;
  const fairGm = fair.data.attributes.gm;

  const showInfoMount = document.getElementById("showInfoMount");
  const tagsMount = document.getElementById("tagsMount");
  const tagsSection = document.getElementById("tagsSection");
  const imgMount = document.getElementById("artistImgMount");
  const fairMount = document.getElementById("fairMount");

  showInfoMount.innerHTML = `
      <h3 class="subtitle" id="showName">${showname}</h3>
      <p>Times: <span >${showtimes}</span></p>
      <p class="maintext">Location: <span><a href="${fairGm}" target="_blank" class="highlighted">${showlocation} </a></span></p>
      <p>Fair: <span><a href="./../fairs/${fairSlug}.html" class="highlighted">${fairName}</a> </span>
      </p>
      <p id="showDescription" class="maintext">${description}</p>
      `;

  // artistInfoMount.innerHTML = ` <h3 class="subtitle">About <span id="aboutArtistTitle">${name}</span></h3>
  //     <p id="artistBiog" class="maintext">${biog}</p>`;
  // add if we implement artist tags

  let tag;
  // console.log(tags);

  if (tags.data.length === 0) {
    tagsSection.classList.add("hide");
  } else {
    tags.data.map((tg) => {
      console.log(tg);
      if (tg.attributes.name) {
        tag = document.createElement("span");
        tag.classList.add("tag");
        tag.innerHTML = tg.attributes.name;

        tagsMount.appendChild(tag);
      }
    });
  }

  fairMount.innerHTML = ` <p>Back to <span><a href="./../fairs/${fairSlug}.html" class="highlighted">${fairName}</a>. </span>
      </p>
            <p>Back to the <a href="./../home.html" class="highlighted">homepage.</a></p>`;

  const imgUrl = image.data.map((img) => {
    return img.attributes.url;
  });
  imgMount.innerHTML = `<img id="artistImg" class="artist-img" src=${imgUrl}></img>`;
};

// const showdown = window.showdown;
// const converter = new showdown.Converter();
// document.getElementById("fair-content").innerHTML = converter.makeHtml(
//   fair.content,
// );

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
    { slug: "20-storytellers-100-keys", id: 30 },
    { slug: "play-disrupt", id: 31 },
    { slug: "katy-cawkwell", id: 32 },
    ,
  ];
  const artist = artists.find(({ slug }) => slug === artistSlug);
  return artist.id;
};

const pathname = window.location.pathname;
getArtist(findId(pathname));
