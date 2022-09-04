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
  const artistInfoMount = document.getElementById("artistInfo");
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

  artistInfoMount.innerHTML = ` <h3 class="subtitle">About <span id="aboutArtistTitle">${name}</span></h3>
      <p id="artistBiog" class="maintext">${biog}</p>`;
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
      </p>`;

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
