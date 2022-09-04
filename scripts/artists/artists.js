// scripts/index.js
export const fetchArtists = () => {
  const artistsReq = new Request(
    "https://coney-golden-key.herokuapp.com/api/artists",
  );

  fetch(artistsReq)
    .then((response) => response.json())
    .then((artists) => {
      // let fairList = document.getElementById("fair-list");

      // artists.forEach((fair) => {
      //   fairList.appendChild(createArticleCard(fair));
      // });
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
  console.log(artist.data.attributes);
  // console.log(fair.data.attributes);
  // TODO check why this [0] is different to another collection

  const showInfoMount = document.getElementById("showInfoMount");
  // const artistInfoMount = document.getElementById("artistInfo");
  const tagsMount = document.getElementById("tagsMount");
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

  tags.data.map((tg) => {
    console.log(tg);
    if (tg.attributes.name) {
      tag = document.createElement("span");
      tag.classList.add("tag");
      tag.innerHTML = tg.attributes.name;

      tagsMount.appendChild(tag);
    }
  });

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
const pathname = "/artists/little-bulb.html";

const findId = (pathname) => {
  const artistSlug = pathname.replace("/artists/", "");
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
  ];
  const idToUse = artists.find(slug === artistSlug);
  return idToUse;
};

// findId("/artists/judith-hope.html");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
