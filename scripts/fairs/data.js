const fairs = [
  {
    id: 1,
    attributes: {
      name: "The Fair of Topsy Turvy Power",
      location: "Guildhall",
      description:
        "All are welcome at the Fair of Topsy Turvy Power, where the City is reimagined, London's young people take the seats of power, and you are invited to build the streets of the Future City.\n<br>\n<br>\nAt the historic headquarters of the City of London’s government, discover unique, diverse and exciting activities and performances in every room. See stunning acrobatics displays around a giant key, stilt walkers, giant puppets, brass bands, cabaret, dance and inclusive art installations.\n<br>\n<br>\nThen at sunset, a fire finale will take place in the yard, closing the day in a spectacular blaze of gold…\n<br>\n<br>\nCheck out the pop up street food & bars at the Fair or check out nearby restaurants & bars for special offers for The Golden Key.",
      programme:
        '<div class="programme-item stretch">\n  <h3 class="location">Guildhall Yard</h3>\n  <div class="show-item">\n    <a href="./../artists/walk-the-plank.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663760262/small_Walk_the_Plank_c_Pete_Carr_9a7f81b699.jpg"\n        class="show-image" loading="lazy" alt="Walk the Plank">\n    </a>\n    <div>\n      <h4 class="artist-name"> <a href="./../artists/walk-the-plank.html">Walk the Plank</a></h4>\n      <p>Circus performances</p>\n      <p>14.00-14.10, 15.30-15.40 & 17.00-17.10</p>\n      <p>Fire finale </p>\n      <p>18.30-18.50</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/old-time-sailors.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759656/small_Old_Time_Sailors_c_Old_Time_Sailors_4_bc380be68a.jpg"\n        class="show-image" loading="lazy" alt="The Old Time Sailors">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/old-time-sailors.html">The Old Time Sailors</a></h4>\n      <p>Live Music</p>\n      <p>12.00-12.40 & 13.15-13.55</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/chivaree-circus.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663758140/small_Chivaree_Circus_c31199d185.jpg"\n        class="show-image" loading="lazy" alt="Chivaree Circus">\n    </a>\n    <div>\n      <h4 class="artist-name"> <a href="./../artists/chivaree-circus.html">Chivaree Circus</a></h4>\n      <p>Stilt walkers</p>\n      <p>12.00-12.30, 13.30-14.00, 15.00-15.30 & 16.30-17.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/little-bulb.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759519/small_Little_Bulb_c_James_Allan_aee27dd742.jpg"\n        class="show-image" loading="lazy" alt="Little Bulb">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/little-bulb.html">Little Bulb</a></h4>\n      <p>Live music</p>\n      <p>12.45-13.05, 14.15-14.35, 15.45-16.05 & 17.15-17.35</p>\n    </div>\n  </div>\n\n  <div class="show-item">\n    <a href="./../artists/judith-hope.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759374/small_The_Keeper_s_Nests_by_Judith_Home_c_Rah_Petherbridge_1_dbdc648ffe.jpg"\n        class="show-image" loading="lazy" alt="Judith Hope">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/judith-hope.html">Judith Hope</a></h4>\n      <p>Walkabout puppetry </p>\n      <p>12.30-13.00, 14.15-14.45, 15.30-16.00 & 17.00-17.30</p>\n    </div>\n  </div>\n\n  <div class="show-item">\n    <a href="./../artists/brass-volcanoes.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663758099/small_Brass_Volcanoes_29d4acaa8b.png"\n        class="show-image" loading="lazy" alt="Brass Volcanoes">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/brass-volcanoes.html">Brass Volcanoes</a></h4>\n      <p>Live music </p>\n      <p>14.45-15.15, 16.15-16.45 & 17.45-18.15</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/jelly-rollers.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759320/small_Jelly_Roller_low_1ff3248c34.jpg"\n        class="show-image" loading="lazy" alt="Jelly Rollers">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/jelly-rollers.html">Jelly Rollers</a></h4>\n      <p>Musical installation </p>\n      <p>13.00-13.30, 16.00-16.30 & 17.30-18.00</p>\n    </div>\n  </div>\n\n</div>\n<div class="programme-item narrow">\n  <h3 class="location"> Great Hall</h3>\n  <div class="show-item">\n    <a href="./../artists/home-sweet-home.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759069/small_homesweethome_c_Clara_Moldenlow_cf0e79bfbf.jpg"\n        class="show-image" loading="lazy" alt="Coney & home sweet home">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/home-sweet-home.html">Coney & home sweet home</a></h4>\n      <p>\n        Participative art installation - 12.00-17.00\n      </p>\n      <p> Participative performance - 17.00-18.00\n      </p>\n    </div>\n  </div>\n</div>\n\n<div class="programme-item narrow">\n  <h3 class="location"> Roman Amphitheatre</h3>\n  <div class="show-item">\n    <a href="./../artists/layla-rosa.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759492/small_Layla_Rosa_low_6bcd97691f.jpg"\n        class="show-image" loading="lazy" alt="Layla Rosa">\n    </a>\n    <div>\n      <h4 class="artist-name"> <a href="./../artists/layla-rosa.html">Layla Rosa</a></h4>\n      <p>Circus performances</p>\n      <p>13.30-13.50, 15.00-15.20 & 16.30-16.50</p>\n    </div>\n  </div>\n</div>\n<div class="programme-item narrow">\n  <h3 class="location"> Guildhall Crypt</h3>\n  <div class="show-item">\n    <a href="./../artists/raze-collective.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759892/small_Raze_BMWMC_Beau_Jangles_Photo_credit_Orlando_Callegaro_02d7da4e64.jpg"\n        class="show-image" loading="lazy" alt="The Raze Collective">\n    </a>\n    <div>\n      <h4 class="artist-name"> <a href="./../artists/raze-collective.html">The Raze Collective</a></h4>\n      <p>Drag & cabaret shows</p>\n      <p>12.45-13.15, 14.15-14.45, 15.45-16.15 & 17.15 - 17.45 </p>\n    </div>\n  </div>\n</div>\n<div class="programme-item narrow">\n  <h3 class="location">Livery Hall</h3>\n  <div class="show-item">\n    <a href="./../artists/spare-tyre.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663939830/small_Spare_Tyre_We_Will_Be_Happy_Here_e673a2661b.jpg"\n        class="show-image" loading="lazy" alt="Spare Tyre">\n    </a>\n    <div>\n      <h4 class="artist-name"> <a href="./../artists/spare-tyre.html">Spare Tyre</a></h4>\n      <p>\n        Interactive inclusive art</p>\n      <p>12.00-17.00</p>\n      </p>\n    </div>\n  </div>\n</div>\n<div class="programme-item stretch">\n  <h3 class="location">Guildhall Art Gallery</h3>\n\n  <div class="show-item">\n    <a href="./../artists/fubunation.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1664353614/small_Waddah_Sinada_32cc54b41e.jpg"\n        class="show-image" loading="lazy" alt="Fubunation">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/fubunation.html">Fubunation</a></h4>\n      <p> Dance</p>\n      <p>13.45-14.05, 15.15-15.35 & 16.45-17.05</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/artistry.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663758056/small_Artistry_Youth_Dance_c_Foteini_Christofilopoulou_34fdabef7e.jpg"\n        class="show-image" loading="lazy" alt="Artistry Youth Dance">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/artistry.html">Artistry Youth Dance</a></h4>\n      <p> Dance</p>\n      <p>13.00-13.20, 14.30-14.50 & 16.00-16.20</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/london-drawing.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759578/small_London_Drawing_MOL_Feb14_3638_64d579048a.jpg"\n        class="show-image" loading="lazy" alt="London Drawing">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/london-drawing.html">London Drawing</a></h4>\n      <p> Live drawing</p>\n      <p>12.00-14.00 & 15.00-17.00</p>\n    </div>\n  </div>\n</div>',
      createdAt: "2022-08-28T21:43:46.675Z",
      updatedAt: "2022-10-13T12:39:32.676Z",
      publishedAt: "2022-08-28T21:44:17.046Z",
      slug: "guildhall",
      directions:
        '<p>Guildhall,<br/>\nAldermanbury, London <a href="https://goo.gl/maps/Ffgi5gCuEZBFgwx28" target="_blank" class="highlighted">EC2V 7HH</a></p>\n\n',
      tube: "Bank, Mansion House, St. Pauls, Moorgate, Cannon Street and Liverpool Street",
      gm: "https://goo.gl/maps/JcAMBTkFJ4PgNETk8",
      latitude: 51.51564634962661,
      longitude: -0.09133943547946421,
      date: "12 - 7pm",
      keyinfo:
        "At the historic headquarters of the City of London Corporation, take the opportunity to venture into spaces not normally open to the public and discover unique and exciting activities and performances in every room.",
      type: null,
      artists: {
        data: [
          {
            id: 33,
            attributes: {
              name: "Spare Tyre",
              showname: "We Will Be Happy Here",
              description:
                "Rip up the old rules and start from scratch  \n<br/>\nTake a restful moment to imagine your best life\n<br/>\nRecreate the world as you want it – with new colours and new priorities\n<br/>\n<br/>\nJoin Spare Tyre to imagine what it would be like to live in a city or even a world that is truly inclusive. Something created by you, not 'on your behalf’. Not just the bricks and mortar, but the values, the rules, and the way of life.\n<br/>\n<br/>\nThis interactive installation is a gentle, inclusive space for you to explore ideas of what you need to thrive. Work with a team of artists and makers to help collectively create this Happy City, using recycled materials to build the city from the ground up and to decorate the city walls with your personal hopes, dreams and demands.\n<br/>\n<br/>\nThe Happy City will be created from 12pm to 5pm. Join Spare Tyre at 3pm for a discussion about how we can make our City inclusive for all its citizens, including disabled and neurodiverse people.\n<br/>\n<br/>\nCo-Produced by Just Jones &\n<br/>\nFeatured in Lewisham London Borough of Culture 2022\n",
              biog: null,
              slug: "spare-tyre",
              createdAt: "2022-09-16T14:06:06.436Z",
              updatedAt: "2022-10-05T08:06:53.185Z",
              publishedAt: "2022-09-16T14:06:07.488Z",
              showtimes: "12pm-5pm, hosted discussion at 3pm. ",
              oneline: null,
              showlocation: "Guildhall Livery Hall",
            },
          },
          {
            id: 11,
            attributes: {
              name: "Fubunation",
              showname: " ",
              description:
                "Fubunation is a London based organisation founded in 2017 by Rhys Dennis and Waddah Sinada with the vision of adding to black culture by creating more visibility and representation for dancers of colour in contemporary dance. Their objective is to build more diversity in the audiences that come to theatres and other dance platforms. \n<br/>\n<br/>\nWaddah Sinada brings a new solo work to the Guildhall Art Gallery that centres and celebrates a black body in and amongst the grandeur and  remnants of a colonial history. This story is inspired by the hardship of the past, plays on the tension of the present and yet looks ahead at creating a future of untold stories: a symbol of optimism and a  celebration of progress. \n",
              biog: "",
              slug: "fubunation",
              createdAt: "2022-09-03T19:20:32.674Z",
              updatedAt: "2022-10-05T08:00:34.051Z",
              publishedAt: "2022-09-03T19:32:09.161Z",
              showtimes: "13.45-14.05, 15.15-15.35 & 16.45-17.05",
              oneline: "Dance",
              showlocation: "Guildhall Art Gallery",
            },
          },
          {
            id: 2,
            attributes: {
              name: "Judith Hope",
              showname: "The Keeper’s Nests",
              description:
                'Based on the magpie rhyme "One for Sorrow, two for joy" which culminates in the line "seven for a secret never to be told", meet two giant magpie puppets as they stalk the streets in their ramshackle walking nests, seeking out the secrets of those they meet. Bystanders are encouraged to write down their secrets of the City and post them to the magpies, in the post boxes carried in their beaks. The magpies promise to keep the secrets safe until the end of time!\n\n<br/>\n<br/>\nJudith Hope is a puppet designer and maker, creating a diverse range of puppets for theatre and events. Her work is inspired by the strange and the wonderful, by folklore, fairytale and fable.\n',
              biog: "",
              slug: "judith-hope",
              createdAt: "2022-08-28T21:51:46.090Z",
              updatedAt: "2022-09-21T11:23:04.064Z",
              publishedAt: "2022-08-28T21:54:39.484Z",
              showtimes: "12.30-13.00, 14.15-14.45, 15.30-16.00 & 17.00-17.30",
              oneline: "Walkabout puppetry",
              showlocation: "Guildhall Yard",
            },
          },
          {
            id: 10,
            attributes: {
              name: "Artistry Youth Dance",
              showname: "The Future Gallery",
              description:
                "What would the future of art galleries look like? Artistry young dancers take over Guildhall Art Gallery and reimagine it as a playful space where all can join and dance. \n<br/>\n<br/>\n\nArtistry Youth Dance is a London based dance company that supports young people of African and Caribbean heritage. They are passionate about empowering young people through dance and are committed to developing the next generation of black dance artists. Their work incorporates the rigour of Modern dance with the rhythmic mastery and flair of diasporic movement styles both old and new. A desire to see how we can expand, uplift and find connection.",
              biog: "",
              slug: "artistry",
              createdAt: "2022-09-03T19:19:44.752Z",
              updatedAt: "2022-10-05T07:59:12.236Z",
              publishedAt: "2022-09-03T19:19:48.832Z",
              showtimes: "13.00-13.20, 14.30-14.50 & 16.00-16.20",
              oneline: "Dance",
              showlocation: "Guildhall Art Gallery",
            },
          },
          {
            id: 5,
            attributes: {
              name: "Coney & home sweet home",
              showname: "Future City ",
              description:
                "Led by artists Abigail Conway and Lucy Hayhoe, home sweet home invites you to build the City of the future. Visit the planning department, choose your task and work with our cardboard engineers to build the city you’d like to see. Work together to create gardens, parks, homes and shops or design your own buildings & services. Come and play alongside fellow citizens and our team of friendly artists and designers to make the city of the future a glorious cardboard reality.\n <br/>\n  <br/>\nDuring that time, the Future Council is busy making plans, for 2040 and beyond. Come and chat to your future councillors, then gather at 5pm for a grand final participatory performance of the Future Council, where worlds are built and anything is possible! The Future Council is designed by Coney, here represented by Mel Frances, Janisè Sadik, Toby Peach and Tassos Stevens.\n",
              biog: "",
              slug: "home-sweet-home",
              createdAt: "2022-08-29T15:10:08.213Z",
              updatedAt: "2022-10-05T07:59:46.513Z",
              publishedAt: "2022-08-29T15:14:26.934Z",
              showtimes:
                "12.00-17.00: Future City \n<br>\n17.00-18.00: Future Council performance",
              oneline: "Participatory art installation",
              showlocation: "Great Hall",
            },
          },
          {
            id: 6,
            attributes: {
              name: "Brass Volcanoes",
              showname: "  ",
              description:
                "Join the mighty Brass Volcanoes as they light a sonic fire in the Yard.\n<br/>\n<br/>\nTheir music is inspired by a long tradition of brass bands from New Orleans as well as other parts of the world. Expect flavours of the Balkans, Latin America, the Caribbean, Klezmer, all with their very own London twist and guaranteed to get you dancing in the streets. ",
              biog: "",
              slug: "brass-volcanoes",
              createdAt: "2022-09-03T19:14:47.836Z",
              updatedAt: "2022-10-05T07:59:21.708Z",
              publishedAt: "2022-09-03T19:15:03.572Z",
              showtimes: "14.45-15.15, 16.15-16.45 & 17.45-18.15",
              oneline: "Live Music",
              showlocation: "Guildhall Yard",
            },
          },
          {
            id: 4,
            attributes: {
              name: "Walk the Plank",
              showname: "The Golden Key",
              description:
                "Gather around a giant key stage set in the middle of Guildhall Yard and witness a spectacular closing ceremony combining aerial circus and acrobatics, music, fire, light and pyrotechnics. Will the performers manage to unlock the City’s secrets, and let the doors stay open for good? \n<br/>\n<br/>\nWalk the Plank dream up, create and produce outstanding moments of outdoor theatre and spectacle. Storytelling is at the heart of nearly everything they do, and the arena for their work is the great outdoors, from boats and mountains to the heart of the City of London. ",
              biog: "",
              slug: "walk-the-plank",
              createdAt: "2022-08-28T22:02:48.185Z",
              updatedAt: "2022-10-05T08:07:50.754Z",
              publishedAt: "2022-08-28T22:15:48.628Z",
              showtimes:
                "<br>\nCircus performances \n14.00-14.10, 15.30-15.40 & 17.00-17.10\n<br>\nFire finale \n18.30-18.50\n",
              oneline: "Circus performances and a fire finale",
              showlocation: "Guildhall Yard",
            },
          },
          {
            id: 12,
            attributes: {
              name: "London Drawing",
              showname: "The Drawing Theatre",
              description:
                "Do you love drawing? Would you like to become part of a living evolving visual sketch? Then this is the event for you! Let London Drawing take you by the hand into a Drawing Theatre adventure where the boundaries between drawing and being drawn are blurred. London Drawing will be creating a beautiful evolving set inspired by the Guildhall Art Gallery's collection of Pre-Raphaelite paintings, re-imagining their iconic imagery to create a new, contemporary story that you can be part of. You will be invited to get involved as part of the set, taking your place in an epic composition to be drawn- or flex your creative muscles and draw from the evolving scene. Expect super lo-fi creativity and super immersive creative fun for all ages and abilities!\n",
              biog: "",
              slug: "london-drawing",
              createdAt: "2022-09-03T19:21:14.790Z",
              updatedAt: "2022-09-25T09:00:10.003Z",
              publishedAt: "2022-09-03T19:21:15.580Z",
              showtimes: "12.00-14.00 & 15.00-17.00",
              oneline: null,
              showlocation: "Guildhall Art Gallery",
            },
          },
          {
            id: 9,
            attributes: {
              name: "Layla Rosa",
              showname: "The Topsy Turvy Circus",
              description:
                "The Topsy Turvy Circus celebrates strange feats, fearless tricks and making the impossible possible. Come join us as we imbibe the history of the oldest entertainment venue in London and its forgotten female performers; witness duets, duels and incredible acts featuring some of the best (and strongest) circus artists on earth! \n<br/>\n<br/>\nLayla Rosa creates experiences that connect people, cultures, audiences and performers, building worlds where circus meets theatre, sound, music, visual art, film, food, nature, science, and… things yet to be explored. She is a co-founder of the pioneering performance collective Shunt, founder of the Walthamstow Youth Circus and The Flying Machine. \n",
              biog: "",
              slug: "layla-rosa",
              createdAt: "2022-09-03T19:19:13.536Z",
              updatedAt: "2022-09-28T08:47:34.255Z",
              publishedAt: "2022-09-03T19:32:17.647Z",
              showtimes: "13.30-13.50, 15.00-15.20 & 16.30-16.50",
              oneline: "Circus performances",
              showlocation: "Roman Amphitheatre & Undercroft Gallery",
            },
          },
          {
            id: 3,
            attributes: {
              name: "Chivaree Circus",
              showname: "Stilt Walkers",
              description:
                "Meet two larger than life queens while they take you back in time, then back to the future to a world where everything is possible and dreams are real. \n<br/>\n<br/>\nChivaree makes intense theatrical experiences that are beautiful by design and intelligent in execution. They create experiences, spin stories into spectacles, make the impossible unforgettable. In performance and philosophy, they dare to dance on the edge. Their work bursts through boundaries. Their knowledge of circus tradition is a platform to experiment and explore. To reinvent old stories – and tell entirely new ones. ",
              biog: "",
              slug: "chivaree-circus",
              createdAt: "2022-08-28T21:58:49.225Z",
              updatedAt: "2022-10-05T07:59:30.259Z",
              publishedAt: "2022-08-28T22:02:27.577Z",
              showtimes: "12.00-12.30, 13.30-14.00, 15.00-15.30 & 16.30-17.00",
              oneline: "Stilt walkers",
              showlocation: "Guildhall Yard",
            },
          },
          {
            id: 7,
            attributes: {
              name: "Old Time Sailors",
              showname: "Live Music",
              description:
                "Ahoy there! You are invited to board the Sailorette and join the plentiful crew, 'The Old Time Sailors', for a spot of foot stomping, dancing and singing in the Yard! You will be sailing back to the 19th century for an immersive concert of traditional music performed in a way you have never seen before\n<br/>\n<br/>\nJoin the Motley Crew and their plethora of traditional and eclectic instruments and sing and dance along as the band performs centuries-old folk and shanty songs.",
              biog: "",
              slug: "old-time-sailors",
              createdAt: "2022-09-03T19:15:42.555Z",
              updatedAt: "2022-09-21T11:27:47.446Z",
              publishedAt: "2022-09-03T19:23:48.400Z",
              showtimes: "12.00-12.40 & 13.15-13.55",
              oneline: "Folk and sea-shanty band",
              showlocation: "Guildhall Yard",
            },
          },
          {
            id: 24,
            attributes: {
              name: "Raze Collective",
              showname: " ",
              description:
                "Raze Collective is a charity dedicated to promoting the very best and boldest of queer\nperformance in the UK. From drag to dance, circus to cabaret, music and everything in between, Raze is an unapologetically queer collective brimming with fresh ideas and bright new talents, from all corners of the LGBTQIA+ performance community.\n\nRaze Collective curates Cabaret in the crypt, a showcase of top-notch queer talent,\nexploring the hidden histories of the city’s queer past; expect comedy, music, drag and a whole lotta fun!\n",
              biog: null,
              slug: "raze-collective",
              createdAt: "2022-09-08T17:23:54.668Z",
              updatedAt: "2022-10-13T12:35:47.632Z",
              publishedAt: "2022-09-08T17:23:58.999Z",
              showtimes:
                "12.45-13.15, 14.15-14.45, 15.45-16.15 & 17:15 - 17:45",
              oneline: "Drag & Cabaret Shows",
              showlocation: "Guildhall Crypt",
            },
          },
          {
            id: 1,
            attributes: {
              name: "Little Bulb",
              showname: "Live Music",
              description:
                "Enjoy the raucous rhythms and merry melodies of these wandering troubadours as they perfume the smoky city air with sweet songs and rowdy refrains to serenade your frolic through the Fair.\n<br/>\n<br/>\nLittle Bulb is an award-winning national touring company based in the South West of England. They are committed to developing devised and physical theatre performances that explore and illuminate minute human details that, in a world so big, are easily swallowed up.  Combining innovative character work, beautiful imagery and exciting homemade music, they aspire to create performances that with humour and sadness will touch, startle and entertain.",
              biog: "",
              slug: "little-bulb",
              createdAt: "2022-08-28T21:51:28.908Z",
              updatedAt: "2022-10-04T20:37:40.009Z",
              publishedAt: "2022-08-28T21:51:30.018Z",
              showtimes: "12.45-13.05, 14.15-14.35, 15.45-16.05 & 17.15-17.35",
              oneline: "Live music",
              showlocation: "Guildhall Yard",
            },
          },
        ],
      },
      tags: {
        data: [
          {
            id: 8,
            attributes: {
              name: "Free, drop in ",
              slug: "free",
              createdAt: "2022-09-04T08:41:54.411Z",
              updatedAt: "2022-09-10T21:54:25.489Z",
              publishedAt: "2022-09-04T08:52:31.008Z",
            },
          },
          {
            id: 15,
            attributes: {
              name: "Toilets available",
              slug: "toilets-available",
              createdAt: "2022-10-10T19:44:22.228Z",
              updatedAt: "2022-10-12T22:14:26.297Z",
              publishedAt: "2022-10-12T22:14:26.294Z",
            },
          },
        ],
      },
      image: {
        data: {
          id: 44,
          attributes: {
            name: "flip.gif",
            alternativeText: "flip.gif",
            caption: "flip.gif",
            width: 1181,
            height: 709,
            formats: null,
            hash: "flip_cb259bf659",
            ext: ".gif",
            mime: "image/gif",
            size: 416.63,
            url: "https://res.cloudinary.com/dcwl3hold/image/upload/v1663171026/flip_cb259bf659.gif",
            previewUrl: null,
            provider: "cloudinary",
            provider_metadata: {
              public_id: "flip_cb259bf659",
              resource_type: "image",
            },
            createdAt: "2022-09-14T15:57:07.502Z",
            updatedAt: "2022-09-14T15:57:07.502Z",
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: "The Fair of Pathways and Passage",
      location: "St Paul's Cathedral Churchyard",
      description:
        "At the Fair of Pathways and Passage, culture is currency, stories and secrets are traded like gold...\n<br>\n<br>\nCelebrating the City's diversity as a vibrant crossroad of cultures from all over the world, St Paul's Fair will take the form of a bustling interactive marketplace full of trucks, caravans and stalls. Wander through to experience interactive performances, playful installations and music, exploring migration stories, unexpected journeys and chance encounters between strangers.\n<br>\n<br>\nThen, shortly after sunset, enter St Paul's Churchyard and walk along a pathway ablaze with fire...\n<br>\n<br>\nCheck out the pop up street food & bars at the Fair or check out nearby restaurants & bars for special offers for The Golden Key.\n",
      programme:
        '<div class="programme-item stretch">\n  <h3 class="location">St Paul’s Churchyard</h3>\n  <div class="show-item">\n    <img\n      src=" https://res.cloudinary.com/dcwl3hold/image/upload/v1662820521/small_Walk_the_Plank_c_Pete_Carr_ca4c564d0a.jpg"\n      class="show-image" loading="lazy" alt="Walk the Plank">\n    <div>\n      <h4 class="artist-name"> <a href="./../artists/walk-the-plank-2.html">Walk the Plank</a></h4>\n      <p> Fire installations</p>\n      <p>18.30-21.30</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <img src=" https://res.cloudinary.com/dcwl3hold/image/upload/v1662287103/small_Thingumajig_Theatre_b27878d2b7.jpg"\n      class="show-image" loading="lazy" alt="Thingumajig Theatre">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/thingumajig-theatre.html">Thingumajig Theatre</a>\n      </h4>\n      <p>Puppetry and storytelling</p>\n      <p>13.00-13.30, 15.45-16.15 & 17.30-18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <img\n      src=" https://res.cloudinary.com/dcwl3hold/image/upload/v1662806742/small_Festival_of_the_Sky_Sun_Socials_59_df6f61c33b.jpg"\n      class="show-image" loading="lazy" alt="Global Grooves">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/global-grooves.html">Global Grooves</a>\n      </h4>\n      <p>Giant Puppets</p>\n      <p>12.30-13.00, 14.15-14.45 & 17.00-17.30</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <img\n      src=" https://res.cloudinary.com/dcwl3hold/image/upload/v1662287042/small_Caravan_Theatre_Robin_Linde_b838fc7275.jpg"\n      class="show-image" loading="lazy" alt="Small Truth Theatre">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/small-truth-theatre.html">Small Truth Theatre</a>\n      </h4>\n      <p>Theatre</p>\n      <p>12.00 - 18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <img\n      src=" https://res.cloudinary.com/dcwl3hold/image/upload/v1662808137/small_Photo_by_Will_Shelmerdine_2_a64f1cc959.png"\n      class="show-image" alt="Pepa Duarte & Charly Monreal">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/pepa-duarte-charly-monreal">Pepa Duarte & Charly Monreal </a></h4>\n      <p>Theatre</p>\n      <p>12.00 - 18:00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <img src=" https://res.cloudinary.com/dcwl3hold/image/upload/v1662817714/small_solcinemabellajohn_a8d622bf7b.jpg"\n      class="show-image" loading="lazy" alt="Sol Cinema">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/sol-cinema.html">Sol Cinema</a></h4>\n      <p>Film</p>\n      <p>12.00 - 17:00</p>\n    </div>\n  </div>\n</div>\n<div class="programme-item">\n  <h3 class="location">Outdoor Stage</h3>\n  <div class="show-item">\n    <img\n      src="https://res.cloudinary.com/dcwl3hold/image/upload/v1662820325/small_She_Koyokh_c_Savannah_Photographiclow_7274188eef.jpg"\n      class="show-image" loading="lazy" alt="She’Koyokh">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/she-koyokh.html">She’Koyokh</a></h4>\n      <p>Live music</p>\n      <p>12.00-12.30 & 13.30-14.15</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <img\n      src="https://res.cloudinary.com/dcwl3hold/image/upload/v1662287099/small_Grupo_Lokito_c_stillmovingmedialow_d287588d47.jpg"\n      class="show-image" alt="Grupo Lokito">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/grupo-lokito.html">Grupo Lokito</a></h4>\n      <p>Live music</p>\n      <p>15.00-15.45 & 16.15-16.45</p>\n    </div>\n  </div>\n</div>\n<div class="programme-item">\n  <h3 class="location"> Paternoster Square</h3>\n  <div class="show-item">\n    <img\n      src="https://res.cloudinary.com/dcwl3hold/image/upload/v1662287108/small_Pirate_Taxi_c_Paul_Blakemore_low_e4d5dda934.jpg"\n      class="show-image" loading="lazy" alt="Pirates of the Carabina">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/pirates-of-the-carabina.html">Pirates of the Carabina</a>\n      </h4>\n      <p>\n        Circus\n      </p>\n      <p>Cancelled due to illness</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <img\n      src=" https://res.cloudinary.com/dcwl3hold/image/upload/v1663869619/small_The_Golden_Key_A_City_of_London_Corporation_event_c_Simon_Jacobs_SJ_139_c_5fa2a48438.jpg"\n      class="show-image" loading="lazy" alt="Girum Bekele">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/girum-bekele.html">Girum Bekele</a></h4>\n      <p>\n        Juggling\n      </p>\n      <p>12.00-12.15, 13.30-13.45, 15.15-15.30 & 16.00-16.15</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <img\n      src=" https://res.cloudinary.com/dcwl3hold/image/upload/v1662287100/small_The_Poetry_Takeaway_c_The_Poetry_Takeaway_75080ec9b9.jpg"\n      class="show-image" loading="lazy" alt="The Poetry Takeaway">\n    <div>\n      <h4 class="artist-name"><a href="./../artists/the-poetry-takeaway.html">The Poetry Takeaway</a></h4>\n      <p>Interactive poetry</p>\n      <p>13.30-17.30</p>\n    </div>\n  </div>\n</div>',
      createdAt: "2022-08-28T21:53:23.621Z",
      updatedAt: "2022-10-15T07:25:52.966Z",
      publishedAt: "2022-08-28T21:54:34.412Z",
      slug: "st-pauls",
      directions:
        ' <p>St Paul\'s Cathedral Churchyard<br/>\nLondon <a href="https://goo.gl/maps/dptpuCWQZQQLvSuZ7" target="_blank" class="highlighted">EC4M 8AD</a></p>',
      tube: "St Paul’s, City Thameslink, Blackfriars ",
      gm: "https://goo.gl/maps/dptpuCWQZQQLvSuZ7",
      latitude: 51.51384,
      longitude: -0.09835,
      date: "12 - 9.30pm",
      keyinfo:
        "Experience interactive performances, playful installations and music, exploring migration stories, unexpected journeys, and chance encounters between strangers.",
      type: null,
      artists: {
        data: [
          {
            id: 26,
            attributes: {
              name: "Pepa Duarte and Charly Monreal",
              showname: "MIGRAN-TE",
              description:
                "MIGRAN-TE is a multidisciplinary performance created by Latinx artists Pepa Duarte and Charly Monreal.  The show explores the intimate and ritualistic act of ‘having tea’ in Latin America, transposing the privacy of the home to the public space through sound and movement.  The piece is accompanied by a soundscape created with the voices and experiences of 7 different Latinx households living in the UK. Migran-te aims to take ownership of the space around us and bring the stories of those often unheard to the centre of our civic spaces. ",
              biog: null,
              slug: "pepa-duarte-charly-monreal",
              createdAt: "2022-09-10T11:09:16.056Z",
              updatedAt: "2022-10-05T08:04:30.594Z",
              publishedAt: "2022-09-10T13:35:14.636Z",
              showtimes: "12.00-18.00",
              oneline: "Theatre",
              showlocation: "Outside St Paul's",
            },
          },
          {
            id: 15,
            attributes: {
              name: "Small Truth Theatre",
              showname: "Caravan Theatre",
              description:
                "Step into the Caravan Theatre, the travelling home of a diverse group of writers and storytellers bringing the very best of theatre to the city streets. Come and enjoy 10-minute performances in their tiny theatre with a big heart!  \n\n<br/>\n<br/>\nSmall Truth Theatre are an award-winning theatre company led by Artistic Director Yasmeen Arden. They give priority to working class artists and seldom heard stories, seeking the extraordinary and searching out moments of truth that often go unseen. ",
              biog: "",
              slug: "small-truth-theatre",
              createdAt: "2022-09-03T19:24:23.024Z",
              updatedAt: "2022-10-05T08:06:31.069Z",
              publishedAt: "2022-09-03T19:32:21.089Z",
              showtimes: "12.00-18.00",
              oneline: null,
              showlocation: "Outside St Paul’s",
            },
          },
          {
            id: 14,
            attributes: {
              name: "Thingumajig Theatre",
              showname: " A La Puppet Carte",
              description:
                "On the menu today…. a pair of pop-up puppet stages built on to the back of electric bicycles, by international puppetry duo Thingumajig. \n \nA Persian tea urn opens to reveal the compelling secrets of a world in miniature. A doting daddy finds the unexpected source of a mysterious sound. Each mobile stage is a puppet show full of surprises, fun and a heart-warming story of friendship and a sense of home. ",
              biog: null,
              slug: "thingumajig-theatre",
              createdAt: "2022-09-03T19:23:20.350Z",
              updatedAt: "2022-10-05T08:08:01.278Z",
              publishedAt: "2022-09-03T19:23:56.700Z",
              showtimes: "13.00-13.30, 15.45-16.15 & 17.30-18.00",
              oneline: null,
              showlocation: "Outside St Paul’s",
            },
          },
          {
            id: 13,
            attributes: {
              name: "The Poetry Takeaway",
              showname: " ",
              description:
                "An old burger van\nStuffed with fresh poetry buns\nServing up warm words.\n \nPlace your order with one of the poets, select the ingredients and collect your own poem that is carefully crafted, written and performed, wrapped up and sent on its journey. The Chefs guarantee everything from tears, laughter and everything in between.\n",
              biog: "",
              slug: "the-poetry-takeaway",
              createdAt: "2022-09-03T19:22:32.984Z",
              updatedAt: "2022-10-15T07:26:18.992Z",
              publishedAt: "2022-09-03T19:23:53.882Z",
              showtimes: "13.30-17.30",
              oneline: null,
              showlocation: "Paternoster Square",
            },
          },
          {
            id: 17,
            attributes: {
              name: "She'Koyokh",
              showname: "Concert",
              description:
                "She'Koyokh is a Yiddish word meaning 'nice one!'.  With over twenty years absorbing the rich folk music traditions of Jewish Eastern Europe, Turkey and the Balkans, She’Koyokh are a live force to be reckoned with. A wild swirl of melody and beautifully intertwined, jazzy guitar licks, effortless accordion, steering double-bass and dance-inducing percussion, plus the sweet and passionate voice of Istanbul-born singer Çiğdem Aslan. ",
              biog: null,
              slug: "she-koyokh",
              createdAt: "2022-09-03T19:27:40.953Z",
              updatedAt: "2022-10-05T08:06:18.862Z",
              publishedAt: "2022-09-03T19:32:23.700Z",
              showtimes: "12.00-12.30 & 13.30-14.15",
              oneline: null,
              showlocation: "Outdoor Stage",
            },
          },
          {
            id: 19,
            attributes: {
              name: "Girum Bekele in association with Good Chance",
              showname: "Juggling Performance",
              description:
                "Watch the incredible juggling skills of Girum Bekele, an Ethiopian circus artist and part of the Good Chance Ensemble. Girum first met Good Chance in the Calais Jungle refugee and migrant camp, when he was drawn to the music emanating from the very first temporary Theatre of Hope... Since then, Girum has travelled around the world, wowing audiences of all ages with his circus and puppetry skills.",
              biog: null,
              slug: "girum-bekele",
              createdAt: "2022-09-03T19:28:48.713Z",
              updatedAt: "2022-10-05T08:01:10.135Z",
              publishedAt: "2022-09-03T19:28:49.197Z",
              showtimes: "12.00-12.15, 13.30-13.45, 15.15-15.30 & 16.00-16.15",
              oneline: null,
              showlocation: "Paternoster Square",
            },
          },
          {
            id: 27,
            attributes: {
              name: "Sol Cinema",
              showname: " ",
              description:
                "Roll up, roll up! The world’s smallest solar powered picture house will be pitching up at the fair showing short films from far and wide, personalised for your viewing pleasure. Audiences will be treated to the full red carpet experience before taking a seat in the plush interior to enjoy mini cinematic treats from around the world. \n",
              biog: null,
              slug: "sol-cinema",
              createdAt: "2022-09-10T13:48:44.941Z",
              updatedAt: "2022-10-05T08:06:44.296Z",
              publishedAt: "2022-09-10T14:27:01.934Z",
              showtimes: "12:00-17:00",
              oneline: "Film",
              showlocation: "Outside St Paul's",
            },
          },
          {
            id: 20,
            attributes: {
              name: "Walk the Plank",
              showname: "Fire Garden",
              description:
                "As the Fire Fairs come to an end, outdoor arts experts Walk the Plank transform St Paul’s Gardens into a dazzling world of illuminating sculptures. Wander around a fiery night-time landscape, with hand crafted, intricate fire sculptures transforming the gardens into a place of wonder and offer a reflection on our age of fire. \n<br/>\n",
              biog: "",
              slug: "walk-the-plank-2",
              createdAt: "2022-09-03T19:29:53.406Z",
              updatedAt: "2022-10-05T08:08:19.363Z",
              publishedAt: "2022-09-03T19:29:54.540Z",
              showtimes: "18.30-21.30",
              oneline: null,
              showlocation: "St Paul's Churchyard",
            },
          },
          {
            id: 16,
            attributes: {
              name: "Pirates of the Carabina",
              showname: "Pirate Taxi",
              description:
                "Pirate Taxi is a family-friendly circus show suitable for adventurers of all ages. Taking place in, on and around an old-school London Taxi, Pirate Taxi combines original live music, humour, a mechanically ingenious set, and extraordinary aerial performance. \n<br/>\n<br/>\nThe show weaves in themes of journeying, displacement and the annual migration of birds. Audiences are invited to join in the ride, as the Taxi becomes a travelling trove of stories, anecdotes and ruminations. And there is always room for one more…\n\n**Pirates of the Carabina are unfortunately unable to perform at The Golden Key Event due to company illness. We are very sorry they are no longer able to be part of the event**",
              biog: "",
              slug: "pirates-of-the-carabina",
              createdAt: "2022-09-03T19:24:59.223Z",
              updatedAt: "2022-10-15T07:22:48.121Z",
              publishedAt: "2022-09-03T19:25:00.070Z",
              showtimes: "Sadly cancelled due to illness",
              oneline: null,
              showlocation: "Paternoster Square",
            },
          },
          {
            id: 8,
            attributes: {
              name: "Jelly Rollers",
              showname: "The Pram",
              description:
                "An Edwardian pram has been upcycled and is now a roving musical delight for your amusement. It has brass horns, trumpets and a drum and emits a cacophony of wonderful sounds as it perambulates through the Guildhall with its friendly operator who’ll get you to produce your own orchestral delight. \n",
              biog: "   ",
              slug: "jelly-rollers",
              createdAt: "2022-09-03T19:16:27.177Z",
              updatedAt: "2022-10-14T17:12:28.147Z",
              publishedAt: "2022-09-03T19:18:25.586Z",
              showtimes: "13.00-13.30, 16.00-16.30 & 17.30-18.00",
              oneline: "Musical installation",
              showlocation: "Guildhall Yard",
            },
          },
          {
            id: 18,
            attributes: {
              name: "Grupo Lokito",
              showname: "Concert",
              description:
                "Grupo Lokito create a modern-day cocktail of two of the great world musics; fusing\nblistering contemporary Congolese grooves with the fire of Cuban music. The glorious melodious vocals of Congolese front men Eugene Makuta and Iddo Donnatella blend with soaring guitars, courtesy of Kenyan rising star Shama Shah, and the lilting keyboards of Latin piano player Sara. All of this sits on top of the rhythmic powerhouse team of Ernesto (drums), Emeris (congas) and Chocolat (bass). The results have audiences dancing in a haze of energy.\n",
              biog: null,
              slug: "grupo-lokito",
              createdAt: "2022-09-03T19:28:11.639Z",
              updatedAt: "2022-10-05T08:02:33.642Z",
              publishedAt: "2022-09-03T19:28:12.401Z",
              showtimes: "15.00-15.45 & 16.15-16.45",
              oneline: null,
              showlocation: "Outdoor Stage",
            },
          },
          {
            id: 25,
            attributes: {
              name: "Global Grooves",
              showname: "Padmini & Sivaji",
              description:
                "Inspired by blockbusting actors Padmini Ramachandran and Sivaji Ganesan, who’ve danced their way through over 40 films, these jaw-dropping puppets from Global Grooves will be bringing some Bollywood glitz and glamour all the way from India. Come and shake hands with Indian movie star royalty and grab a selfie with these superstars of the golden screen, as they move majestically around St Paul’s Cathedral. ",
              biog: null,
              slug: "global-grooves",
              createdAt: "2022-09-10T10:49:59.109Z",
              updatedAt: "2022-10-05T08:02:19.598Z",
              publishedAt: "2022-09-10T14:26:02.749Z",
              showtimes: "12.30-13.00, 14.15-14.45 & 17.00-17.30",
              oneline: "Giant Puppets",
              showlocation: "Outside St Paul's",
            },
          },
        ],
      },
      tags: {
        data: [
          {
            id: 8,
            attributes: {
              name: "Free, drop in ",
              slug: "free",
              createdAt: "2022-09-04T08:41:54.411Z",
              updatedAt: "2022-09-10T21:54:25.489Z",
              publishedAt: "2022-09-04T08:52:31.008Z",
            },
          },
          {
            id: 15,
            attributes: {
              name: "Toilets available",
              slug: "toilets-available",
              createdAt: "2022-10-10T19:44:22.228Z",
              updatedAt: "2022-10-12T22:14:26.297Z",
              publishedAt: "2022-10-12T22:14:26.294Z",
            },
          },
        ],
      },
      image: {
        data: {
          id: 47,
          attributes: {
            name: "juggler.gif",
            alternativeText: "juggler.gif",
            caption: "juggler.gif",
            width: 707,
            height: 694,
            formats: null,
            hash: "juggler_fd1456133a",
            ext: ".gif",
            mime: "image/gif",
            size: 151.84,
            url: "https://res.cloudinary.com/dcwl3hold/image/upload/v1663171058/juggler_fd1456133a.gif",
            previewUrl: null,
            provider: "cloudinary",
            provider_metadata: {
              public_id: "juggler_fd1456133a",
              resource_type: "image",
            },
            createdAt: "2022-09-14T15:57:38.871Z",
            updatedAt: "2022-09-14T15:57:38.871Z",
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      name: "The Fair of Tall and Small Stories",
      location: "London Wall to the Museum of London",
      description:
        "There’s a story nestled in every nook, cranny and corner of the Fair of Tall and Small Stories, so lend an ear and listen up! Follow the red thread of time from ancient tales of Londinium right through to contemporary chronicles of the City of London in a unique storytelling experience amplifying the voices of London past, present and future. \n<br>\n<br>\nJoin us for a stroll through the London Wall Highwalks to hear the ordinary and extraordinary tales of the slippery Jack Sheppard, the mighty Gog and Magog, the Witch of Wapping, Boudicca of the Iceni, Polly the Parrot and more. Hear stories of boxers and butchers, street sweepers and party-goers, poets and suffragettes. \n<br>\n<br>\nCheck out the pop up street food & bars at the Fair or check out nearby restaurants & bars for special offers for The Golden Key.\n",
      programme:
        '<div class="programme-item grow">\n  <h3 class="location">Museum of London entrance</h3>\n  <div class="show-item">\n    <a href="./../artists/emergency-exit-arts.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759126/small_The_Story_Collector_c_Emergency_Exit_Arts_6_4a13ad9e88.jpg"\n        class="show-image" loading="lazy" alt="Emergency Exit Arts">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/emergency-exit-arts.html">Emergency Exit Arts</a>\n      </h4>\n      <p>Giant puppetry & interactive storytelling</p>\n      <p>12.00-18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/the-keyholders-cafe.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663794158/small_Keyholders_Cafe_0c57db905a.jpg"\n        class="show-image" loading="lazy" alt="The Keyholders’ Cafe">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/the-keyholders-cafe.html">The Keyholders’ Cafe</a></h4>\n      <p>Participative storytelling </p>\n      <p>12.00-18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/walk-the-plank-and-chivaree-circus.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663935697/Chivaree_Circus_d50ad99f9a.jpg"\n        class="show-image" loading="lazy" alt="Walk The Plank & Chivaree Circus">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/walk-the-plank-and-chivaree-circus.html">Walk The Plank & Chivaree\n          Circus</a></h4>\n      <p>Fire Display</p>\n      <p>18:00-19:00</p>\n    </div>\n  </div>\n</div>\n<div class="programme-item">\n  <h3 class="location">London Wall Highwalks</h3>\n  <div class="show-item">\n    <a href="./../artists/100-keys.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663932198/small_Sef_Townsend_2_1_e9cd6220fd.png"\n        class="show-image" loading="lazy" alt="100 keys">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/100-keys.html">100 keys</a></h4>\n      <p>Pop-up storytelling performances </p>\n      <p>12.00-18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/the-red-thread.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663934752/small_Red_Thread_4f4313e048.jpg"\n        class="show-image" loading="lazy" alt="The Red Thread">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/the-red-thread.html">The Red Thread</a></h4>\n      <p>Art Installation</p>\n      <p>12.00-18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/shotgun-carousel.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1665338725/small_Rah_Petherbridge_Photography_red_pla_la_4_7796c06144.jpg"\n        class="show-image" loading="lazy" alt="100 keys">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/shotgun-carousel.html">Shotgun Carousel</a></h4>\n      <p>Story weaving</p>\n      <p>12.00-18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/we-are-londoners.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1665339044/small_Untitled_design_6_131e88352e.png"\n        class="show-image" loading="lazy" alt="100 keys">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/we-are-londoners.html">We Are Londoners</a></h4>\n      <p>Audio Installation</p>\n      <p>12.00-18.00</p>\n    </div>\n  </div>\n</div>\n<div class="programme-item">\n  <h3 class="location">St Alphage Gardens</h3>\n  <div class="show-item">\n    <a href="./../artists/the-wheelabouts.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1662286821/small_The_Wheelabouts_Boudicca_156cf967f3.jpg"\n        class="show-image" loading="lazy" alt="The Wheelabouts">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/the-wheelabouts.html">The Wheelabouts</a>\n      </h4>\n      <p>Walkabout performance</p>\n      <p>13.00-13.30, 14.30-15.00, 16.00-16.30 & 17.30-18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/play-disrupt.html">\n      <img src="https://res.cloudinary.com/dcwl3hold/image/upload/v1662821416/small_ROMANS_c_Jack_Offord_4ac639bd46.jpg"\n        class="show-image" loading="lazy" alt="Play:Disrupt - ROMANS!">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/play-disrupt.html">Play:Disrupt - ROMANS!</a></h4>\n      <p>Games</p>\n      <p>12.00-18.00</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/katy-cawkwell.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759407/small_Woman_on_Fire_The_Legend_of_Boudicca_c_Katy_Cawkwell_1_37683e9112.jpg"\n        class="show-image" loading="lazy" alt="Katy Cawkwell">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/katy-cawkwell.html">Katy Cawkwell</a></h4>\n      <p>Storytelling</p>\n      <p>12.30-13.00, 13.30-14.00, 14.30-15.00, 15.30-16.00, 16.30-17.00, 17.30-18.00</p>\n    </div>\n  </div>\n</div>\n<div class="programme-item">\n  <h3 class="location">Alban & Bastion Highwalks</h3>\n  <div class="show-item">\n    <a href="./../artists/the-story-explorers.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663794298/small_The_Story_Explorers_c_Scarlett_Entertainment_b6174cc0f9.jpg"\n        class="show-image" loading="lazy" alt="The StoryExplorers">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/the-story-explorers.html">The StoryExplorers</a></h4>\n      <p>Puppetry & storytelling</p>\n      <p> 12.30-12.50, 13.30-13.50, 14.30-14.50, 15.30-15.50, 16.30-16.50, 17.30-17.50</p>\n    </div>\n  </div>\n  <div class="show-item">\n    <a href="./../artists/moth-theatre.html">\n      <img\n        src="https://res.cloudinary.com/dcwl3hold/image/upload/v1663759617/small_The_Forbidden_Treasure_Chest_c_Moth_Theatre_8ef1dd9bc5.jpg"\n        class="show-image" loading="lazy" alt="Moth Theatre">\n    </a>\n    <div>\n      <h4 class="artist-name"><a href="./../artists/moth-theatre.html">Moth Theatre</a></h4>\n      <p>\n        Puppetry & storytelling\n      </p>\n      <p> 12.00-12.20, 13.00-13.20, 14.00-14.20, 15.00-15.20, 16.00-16.20, 17.00-17.20</p>\n    </div>\n  </div>\n</div>',
      createdAt: "2022-08-28T21:54:10.334Z",
      updatedAt: "2022-10-09T18:20:02.271Z",
      publishedAt: "2022-08-28T21:54:11.956Z",
      slug: "london-wall",
      directions:
        '<p>The London Wall Highwalks<br/>\nEntrance 1: London Wall Place, London <a href="https://goo.gl/maps/2FhzYTcc915VXUdt9" target="_blank" class="highlighted">EC2Y 5DE</a><br/>\nEntrance 2: Museum of London, 150 London Wall, London <a href="https://goo.gl/maps/F47q88HHUREMBPGN8" target="_blank" class="highlighted">EC2Y 5HN</a></p>',
      tube: "Moorgate, Barbican, St Paul’s, Liverpool Street, Farringdon",
      gm: "https://goo.gl/maps/wzNpkWUyGgkGRtVp6",
      latitude: 51.51774612259046,
      longitude: -0.09478091426405827,
      date: "12 - 7pm",
      keyinfo:
        "There’s a story nestled in every nook, cranny and corner of the Fair of Tall and Small Stories, so lend an ear and listen up! ",
      type: null,
      artists: {
        data: [
          {
            id: 30,
            attributes: {
              name: "100 Keys",
              showname: " ",
              description:
                "Follow the Red Thread and discover one hundred moments of the City of London’s history through a pop-up promenade of performances by some of London’s best storytellers and poets. How many stories will you be able to spot? \n</br>\n</br>\nIncluding performances by Amari Harris, Andrew James Brown, Anne Johnson, Debbie Guneratne, Diana Olutunmogun, Gboyega Odubanjo, Hannah Akhalu, Kobi, Lucy Lill, Maria McColgan, Nell Phoenix, Olivia Armstrong, Paul Rubinstein, Richard Popple, Sarah Rundle, Sef Townsend, Susanna Roland and more.",
              biog: null,
              slug: "100-keys",
              createdAt: "2022-09-10T14:48:50.472Z",
              updatedAt: "2022-10-08T12:12:09.533Z",
              publishedAt: "2022-09-10T14:48:52.148Z",
              showtimes: "12.00-18.00",
              oneline: "Pop-up storytelling performances",
              showlocation: "London Wall Highwalks",
            },
          },
          {
            id: 23,
            attributes: {
              name: "The Wheelabouts - Boudicca",
              showname: "Boudicca",
              description:
                "Our heroine Boudicca, was head of the Celtic Iceni tribe during the Roman occupation of England. The image we hold of her is of a vengeful warrior, bent on seeking out and punishing all Romans! \n\nBoudicca will be rampaging through the City aboard a stunning Chariot led by a galloping mechanical horse, accompanied by a raucous soundtrack. On board will be an arsenal of comedy props and weapons, to equip her followers and mete out her ‘justice’.\n\nWatch out Romans…\n",
              biog: null,
              slug: "the-wheelabouts",
              createdAt: "2022-09-03T19:32:00.943Z",
              updatedAt: "2022-09-22T19:30:04.905Z",
              publishedAt: "2022-09-03T21:53:15.317Z",
              showtimes: "13.00-13.30, 14.30-15.00, 16.00-16.30 & 17.30-18.00",
              oneline: "Walkabout performance",
              showlocation: "St Alphage Gardens",
            },
          },
          {
            id: 28,
            attributes: {
              name: "The StoryExplorers ",
              showname: " Dick Whittington ",
              description:
                "Meet Nellie and Nathaniel, StoryExplorers, intrepid adventurers and guardians of the intriguingly ingenious, much-loved StoryGenerator. Discover what secrets this mysterious machine holds and listen to their spectacular tale from the heart of London.",
              biog: null,
              slug: "the-story-explorers",
              createdAt: "2022-09-10T14:42:16.064Z",
              updatedAt: "2022-10-08T12:14:42.932Z",
              publishedAt: "2022-09-10T14:43:10.862Z",
              showtimes:
                "12.30-12.50, 13.30-13.50, 14.30-14.50, 15.30-15.50, 16.30-16.50, 17.30-17.50",
              oneline: "Puppetry & storytelling",
              showlocation: "Junction of Alban & Bastion Highwalks",
            },
          },
          {
            id: 48,
            attributes: {
              name: "Shotgun Carousel",
              showname: "The Story Weavers",
              description:
                "Mysterious keepers of The Red Thread, The Story Weavers will guide you on your path through the Fair of Tall and Small Stories, spinning tales and twisting histories as they playfully reveal the secrets of the City. Presented by Shotgun Carousel, encounter this collective of walkabout wonders on your way down the London High Walks. \n\nShotgun Carousel are a London based, queer-led theatrical entertainment company and multi-disciplinary performance collective.\n",
              biog: null,
              slug: "shotgun-carousel",
              createdAt: "2022-10-08T12:00:03.004Z",
              updatedAt: "2022-10-09T18:09:05.004Z",
              publishedAt: "2022-10-08T12:00:05.044Z",
              showtimes: "12 - 6pm",
              oneline: "Story weaving",
              showlocation: "London Wall High Walks",
            },
          },
          {
            id: 22,
            attributes: {
              name: "The Keyholders’ Cafe",
              showname: " ",
              description:
                "A café where your coffee and cake comes with a side of secrets.\n \nCome and share your secrets about the City of London, find out hidden tips from other City residents and write your own stories on the Red Thread of Secrets. \n",
              biog: null,
              slug: "the-keyholders-cafe",
              createdAt: "2022-09-03T19:31:25.677Z",
              updatedAt: "2022-09-21T21:47:00.751Z",
              publishedAt: "2022-09-03T19:31:26.403Z",
              showtimes: "12pm - 6pm",
              oneline: null,
              showlocation: "Museum of London entrance",
            },
          },
          {
            id: 31,
            attributes: {
              name: "Play: Disrupt",
              showname: "ROMANS!",
              description:
                "Challenge your inner centurion, play 3000-year-old board games and strive for victory in a gladiatorial bout of rock-paper-scissors to the death! Recreate the anticipation and excitement of ancient Rome as you cause a megalithic stir in our colossal play event. Aimed at all ages, ROMANS! also features knucklebones, dice games and an area for younger players to make up and share their own games.\n\nOur brilliant Mini Colosseum playscape is brought to life by you, the players. Using games and interactive storytelling we recreate the anticipation and excitement of ancient Rome in all its glory.\n",
              biog: null,
              slug: "play-disrupt",
              createdAt: "2022-09-10T14:50:34.273Z",
              updatedAt: "2022-10-05T08:05:02.750Z",
              publishedAt: "2022-09-10T14:51:28.978Z",
              showtimes: "12.00-18.00",
              oneline: "Games",
              showlocation: "St Alphage Gardens",
            },
          },
          {
            id: 46,
            attributes: {
              name: "The Red Thread",
              showname: "Art Installation",
              description:
                "A new interactive art installation created by Josie Hunter Design, follow The Red Thread as it weaves through the London Wall High Walks, tying together the 100 Keys pop-up storytelling performances that span from the Museum of London to St Alphage Gardens. ",
              biog: null,
              slug: "the-red-thread",
              createdAt: "2022-09-23T11:59:30.396Z",
              updatedAt: "2022-10-05T08:07:28.422Z",
              publishedAt: "2022-09-23T11:59:31.338Z",
              showtimes: "12-6pm",
              oneline: null,
              showlocation: "London Wall High Walks",
            },
          },
          {
            id: 49,
            attributes: {
              name: "We Are Londoners ",
              showname: "Everyday Magic",
              description:
                "Pop on some headphones on and tune into We Are Londoners, a collection of songs written by Anne Johnson and arranged by Michele Chowrimootoo exploring diverse elements of London history from Cockney rhyming slang to London fog, costermongers and more. The 'We Are Londoners' project ran in London State Primary Schools, created by charity Everyday Magic to help children know more about London and its connection to the rest of the world. \n\nEveryday Magic is a London-wide charity currently running regular  programmes in London Boroughs. Every year over 1,500 children aged 3 to 11 have their imaginations fired up with colourful and vivid storytelling at school.",
              biog: null,
              slug: "we-are-londoners",
              createdAt: "2022-10-08T12:02:49.529Z",
              updatedAt: "2022-10-09T18:14:28.041Z",
              publishedAt: "2022-10-08T12:02:50.763Z",
              showtimes: "12 - 6pm ",
              oneline: "Audio Installation",
              showlocation: "London Wall Highwalks",
            },
          },
          {
            id: 29,
            attributes: {
              name: "Moth Theatre - The Forbidden Treasure Chest",
              showname: "The Forbidden Treasure Chest",
              description:
                "Moth Theatre's 'The Forbidden Treasure Chest' is a playful take on the original tale of The Cheapside Hoard. Join Rat and his two best pals on an adventure through time, as an unlikely find in the basement of a jewellery store changes their narrative forever. Expect ghostly ghouls, mind boggling treasure and lots of silly dancing on this joyful adventure. A wild almost... true tale about treasure chests and uninvited guests. Strap in and enjoy the ride!",
              biog: null,
              slug: "moth-theatre",
              createdAt: "2022-09-10T14:45:46.885Z",
              updatedAt: "2022-09-21T11:27:10.585Z",
              publishedAt: "2022-09-16T13:41:10.453Z",
              showtimes:
                "12.00-12.20, 13.00-13.20, 14.00-14.20, 15.00-15.20, 16.00-16.20, 17.00-17.20",
              oneline: null,
              showlocation: "Junction of Alban & Bastion Highwalks",
            },
          },
          {
            id: 21,
            attributes: {
              name: "Emergency Exit Arts",
              showname: "The Story Collector",
              description:
                "Meet the spectacular Story Collector! Performers will burst out from inside a giant moving puppet, sharing the stories of our diverse voices and reminding the audiences that no matter who you are, we all have a story to tell. The Story Collector is Emergency Exit Art's latest creation co-produced with Kauma Arts.",
              biog: null,
              slug: "emergency-exit-arts",
              createdAt: "2022-09-03T19:30:46.577Z",
              updatedAt: "2022-10-05T08:00:20.957Z",
              publishedAt: "2022-09-03T19:32:05.594Z",
              showtimes: "12pm - 6pm",
              oneline: null,
              showlocation: "Museum of London entrance",
            },
          },
          {
            id: 47,
            attributes: {
              name: "Walk The Plank & Chivaree Circus",
              showname: "Fire Display",
              description:
                "As evening falls the Museum of London's Rotunda Garden will come ablaze with a gentle fiery light display created by Walk The Plank and Chivaree Circus. Gaze down into the twinkling flames as you contemplate the bustling City all around you, full of sound and colour. ",
              biog: null,
              slug: "walk-the-plank-and-chivaree-circus",
              createdAt: "2022-09-23T12:22:02.030Z",
              updatedAt: "2022-09-23T12:23:28.416Z",
              publishedAt: "2022-09-23T12:23:28.412Z",
              showtimes: "6-7pm",
              oneline: null,
              showlocation: "Museum of London Entrance ",
            },
          },
          {
            id: 32,
            attributes: {
              name: "Katy Cawkwell ",
              showname: "A Woman on Fire - The Legend of Boudicca",
              description:
                "A dramatic retelling of the story of Boudica's Rebellion: two great leaders thrown into opposition, leaving a trail of burning outrage and destruction in their wake. A Roman governor struggling to keep control of a wild people and a warrior queen fighting for her freedom, her family and her tribe. Come and hear this vivid slice of London's history.  ",
              biog: null,
              slug: "katy-cawkwell",
              createdAt: "2022-09-10T14:52:36.133Z",
              updatedAt: "2022-10-05T08:03:13.930Z",
              publishedAt: "2022-09-10T14:52:39.051Z",
              showtimes:
                "12.30-13.00, 13.30-14.00, 14.30-15.00, 15.30-16.00, 16.30-17.00, 17.30-18.00",
              oneline: null,
              showlocation: "St Alphage Gardens",
            },
          },
        ],
      },
      tags: {
        data: [
          {
            id: 8,
            attributes: {
              name: "Free, drop in ",
              slug: "free",
              createdAt: "2022-09-04T08:41:54.411Z",
              updatedAt: "2022-09-10T21:54:25.489Z",
              publishedAt: "2022-09-04T08:52:31.008Z",
            },
          },
          {
            id: 15,
            attributes: {
              name: "Toilets available",
              slug: "toilets-available",
              createdAt: "2022-10-10T19:44:22.228Z",
              updatedAt: "2022-10-12T22:14:26.297Z",
              publishedAt: "2022-10-12T22:14:26.294Z",
            },
          },
        ],
      },
      image: {
        data: {
          id: 45,
          attributes: {
            name: "band.gif",
            alternativeText: "band.gif",
            caption: "band.gif",
            width: 707,
            height: 694,
            formats: null,
            hash: "band_4e6d71f773",
            ext: ".gif",
            mime: "image/gif",
            size: 274.49,
            url: "https://res.cloudinary.com/dcwl3hold/image/upload/v1663171057/band_4e6d71f773.gif",
            previewUrl: null,
            provider: "cloudinary",
            provider_metadata: {
              public_id: "band_4e6d71f773",
              resource_type: "image",
            },
            createdAt: "2022-09-14T15:57:38.311Z",
            updatedAt: "2022-09-14T15:57:38.311Z",
          },
        },
      },
    },
  },
];

export { fairs };
