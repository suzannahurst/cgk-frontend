const faqs = [
  {
    id: 9,
    attributes: {
      question: "What type of performances are happening? ",
      answer:
        "The Golden Key has over 200 artists performing throughout. Performances at the Fairs include live music, circus, dance, poetry, interactive theatre, participatory games and activities.  The Maze ends with 12 different special immersive experiences across the secret locations. The Hunt is a participatory treasure hunt with games, puzzles and riddles to solve. \n",
      createdAt: "2022-09-21T22:42:27.629Z",
      updatedAt: "2022-09-23T16:50:25.518Z",
      publishedAt: "2022-09-21T22:42:29.392Z",
      category: "about",
    },
  },
  {
    id: 1,
    attributes: {
      question: "Is this for me?",
      answer:
        "The Golden Key has been designed to be enjoyable for everyone. \n<br/>\n<br/>\nThe Fairs’ programme has been designed for **audiences of all ages**, including plenty of activities for little ones.. \n<br/>\n<br/>\nThe <u>[Maze](./../maze.html)</u> and the [<u>Hunt </u>](https://thegoldenkey.london/hunt.html) are open to both adults and families, though some doors have a specific **age guidance**, and two doors are for adults only. Please refer to each event page to find out if that event is for you.   \n",
      createdAt: "2022-09-01T17:35:00.284Z",
      updatedAt: "2022-09-25T11:42:45.808Z",
      publishedAt: "2022-09-01T17:35:01.153Z",
      category: "plan",
    },
  },
  {
    id: 10,
    attributes: {
      question: "Can I drive to and around The Golden Key?",
      answer:
        "It is strongly recommended that visitors leave their cars at home and walk or use public transport where possible. See the [<u>How to Get There </u>](https://thegoldenkey.london/info/how-to-get-there.html) page for details. \n",
      createdAt: "2022-09-21T22:43:08.798Z",
      updatedAt: "2022-09-25T11:46:31.770Z",
      publishedAt: "2022-09-21T22:43:10.856Z",
      category: "travel",
    },
  },
  {
    id: 12,
    attributes: {
      question: "Will The Golden Key affect parking in the City of London? ",
      answer:
        "Normal parking restrictions will be in force in the City of London for The Golden Key. For details regarding parking please visit - [<u>cityoflondon.gov.uk/services/parking</u>](https://www.cityoflondon.gov.uk/services/parking)\n",
      createdAt: "2022-09-21T22:44:25.353Z",
      updatedAt: "2022-09-26T08:50:02.087Z",
      publishedAt: "2022-09-21T22:44:26.333Z",
      category: "travel",
    },
  },
  {
    id: 39,
    attributes: {
      question:
        "I’m not attending The Golden Key – can I still come into the City of London? ",
      answer:
        "Access to the City of London will not be restricted in any way. ",
      createdAt: "2022-09-22T23:21:43.192Z",
      updatedAt: "2022-09-29T10:38:27.987Z",
      publishedAt: "2022-09-22T23:21:44.704Z",
      category: "local",
    },
  },
  {
    id: 4,
    attributes: {
      question: "How can I get there?",
      answer:
        "Please check our [<u>How to Get There</u>](./../info/how-to-get-there.html) page with general information about how to get to the City.",
      createdAt: "2022-09-03T18:23:46.433Z",
      updatedAt: "2022-09-25T11:49:01.293Z",
      publishedAt: "2022-09-03T18:23:54.892Z",
      category: "travel",
    },
  },
  {
    id: 11,
    attributes: {
      question: "Will the event cause travel disruptions? ",
      answer:
        "There are no planned road closures as part of the event.  \n\nWe recommend you check with your travel operator for specific information before you travel to the event. \n\nFor updated travel advice across London during The Golden Key, please visit [<u>tfl.gov.uk</u>](https://tfl.gov.uk/)",
      createdAt: "2022-09-21T22:43:43.854Z",
      updatedAt: "2022-09-26T08:51:22.066Z",
      publishedAt: "2022-09-21T22:43:44.821Z",
      category: "travel",
    },
  },
  {
    id: 15,
    attributes: {
      question: "Is the event suitable for children? ",
      answer:
        "Yes, the event can be enjoyed by all the family. The programme at the Fairs is family friendly. The Maze is for all ages with the exception of two adventures which are for adults only. There are two adventures on the route which have been specially created for families but can be enjoyed by all. Details of the Maze of Adventures can be found[<u> here.</u>](https://thegoldenkey.london/maze/maze-map.html) \n\nThe Golden Key event organisers cannot be responsible for children or vulnerable people whilst at the event. All children under the age of 12 should be accompanied by a responsible adult at all times. \n",
      createdAt: "2022-09-21T22:45:49.495Z",
      updatedAt: "2022-09-23T16:52:18.935Z",
      publishedAt: "2022-09-21T22:45:52.118Z",
      category: "plan",
    },
  },
  {
    id: 6,
    attributes: {
      question: "What is The Golden Key?",
      answer:
        "The Golden Key is a spectacular free event transforming the City of London into a largescale\nprogramme of immersive performance and participatory events.\nInspired by the secrets of the Square Mile, this spectacular event will transform the City of London’s\nstreets and buildings with theatre, games and performances for all ages.\nFeaturing 200+ performers, three street festivals, a mass treasure hunt, a ‘maze’ of immersive\nadventures and creative street theatre, you’ll be guided by a host of characters conjured up from the\npast and future.",
      createdAt: "2022-09-21T22:19:21.124Z",
      updatedAt: "2022-09-23T16:49:21.323Z",
      publishedAt: "2022-09-21T22:19:22.218Z",
      category: "about",
    },
  },
  {
    id: 3,
    attributes: {
      question: "Is this free?",
      answer:
        "All our events are free and accessible on a drop in basis. However, some do have limited capacity, so places will be allocated on a first come first serve basis.",
      createdAt: "2022-09-01T17:35:19.533Z",
      updatedAt: "2022-09-23T16:50:14.311Z",
      publishedAt: "2022-09-01T17:35:21.262Z",
      category: "about",
    },
  },
  {
    id: 7,
    attributes: {
      question: "When is The Golden Key taking place?",
      answer:
        "For one day only on **Saturday 15th October 2022** in the City of London.",
      createdAt: "2022-09-21T22:19:41.590Z",
      updatedAt: "2022-09-23T16:49:32.042Z",
      publishedAt: "2022-09-21T22:19:42.498Z",
      category: "about",
    },
  },
  {
    id: 2,
    attributes: {
      question: "Who came up with this?",
      answer:
        "This event has been created by [<u>Coney & Friends</u>](./about-coney.html), and commissioned by the City of London Corporation. Over **200 individual artists** are taking part, including 30 companies. \n",
      createdAt: "2022-09-01T17:35:11.842Z",
      updatedAt: "2022-09-23T16:50:35.492Z",
      publishedAt: "2022-09-01T17:35:12.886Z",
      category: "about",
    },
  },
  {
    id: 13,
    attributes: {
      question: "Can I get a taxi or minicab to or around The Golden Key? ",
      answer:
        "Yes, the roads will be open as normal, but we recommend you travel to the event on foot or by public transport and that you enjoy the event on foot in order to have the best experience. \n",
      createdAt: "2022-09-21T22:44:44.355Z",
      updatedAt: "2022-09-23T16:51:53.803Z",
      publishedAt: "2022-09-21T22:44:45.152Z",
      category: "travel",
    },
  },
  {
    id: 36,
    attributes: {
      question: "Do any performances use sound? ",
      answer:
        "There will be amplified sound at a number of performances as part of the Fairs and the Maze. Noise levels for outdoor performances with sound will be monitored by The Golden Key team. All performances with amplified sound will be finished by 7pm at the latest. \n",
      createdAt: "2022-09-22T23:19:51.605Z",
      updatedAt: "2022-09-23T21:47:23.208Z",
      publishedAt: "2022-09-22T23:19:52.295Z",
      category: "local",
    },
  },
  {
    id: 37,
    attributes: {
      question:
        " I make or receive deliveries in the City of London. How will I be affected? ",
      answer:
        "There will be no disruption to deliveries caused by the event. \n",
      createdAt: "2022-09-22T23:21:08.906Z",
      updatedAt: "2022-09-23T21:48:09.641Z",
      publishedAt: "2022-09-22T23:21:09.842Z",
      category: "local",
    },
  },
  {
    id: 38,
    attributes: {
      question: "Will there be changes to waste collection?",
      answer: "There will be no changes to the waste collection service. \n",
      createdAt: "2022-09-22T23:21:23.777Z",
      updatedAt: "2022-09-23T21:51:51.405Z",
      publishedAt: "2022-09-22T23:21:24.522Z",
      category: "local",
    },
  },
  {
    id: 8,
    attributes: {
      question: "What time is the Golden Key?",
      answer:
        "The event runs from midday onwards.\n\nTimings for the Fairs are: \n<br/>\n**St Paul’s Fair – 12 – 9.30pm\n<br/>\nGuildhall Fair – 12 – 7pm\n<br/>\nLondon Wall Fair – 12 – 7pm**\n\nDetails of the full Fair programmes can be found at the Fair pages for [<u>St Paul’s</u>](https://thegoldenkey.london/fairs/st-pauls.html), the [<u>Guildhall</u>](https://thegoldenkey.london/fairs/guildhall.html) and\n[<u>London Wall.</u>](https://thegoldenkey.london/fairs/london-wall.html)\n<br/>\nThe Maze of Adventures is open from 12 – 6pm, with last entry at 5pm. The adventure of Share Mile closes\nat 4pm.\n<br/>\nThe Hunt is open from 12 – 5pm, with last entry at 4pm.",
      createdAt: "2022-09-21T22:30:35.663Z",
      updatedAt: "2022-09-25T11:43:49.463Z",
      publishedAt: "2022-09-21T22:30:37.946Z",
      category: "about",
    },
  },
  {
    id: 20,
    attributes: {
      question: " Have access requirements been considered? ",
      answer:
        "The three Fairs are wheelchair accessible with step-free access. \n\nThe Maze of Adventures has thre finale locations which do not have step-free access due to the historical nature of the building. The other remaining nine adventures are wheelchair accessible. Details of these can be found [<u>here</u>](https://thegoldenkey.london/maze/maze-map.html). The sound elements to the adventures include integrated captions. \n\nThe Hunt has step free access throughout. The digital adventure includes captions. \n",
      createdAt: "2022-09-22T22:48:14.867Z",
      updatedAt: "2022-10-09T13:46:55.831Z",
      publishedAt: "2022-09-22T22:48:16.468Z",
      category: "plan",
    },
  },
  {
    id: 22,
    attributes: {
      question: "Do I need data or Wi-Fi at the event? ",
      answer:
        "Yes, you will need to have data on your phone to be able to access the smartphone adventures for The Maze and The Hunt. \n\nThe City has excellent 4G coverage and also offers free access to the ‘O2 Wi-Fi’ network for visitors to use. More information can be found [<u>here.</u> ](https://www.cityoflondon.gov.uk/supporting-businesses/commercial-property-support-and-advice/telecommunications-and-utilities-infrastructure-in-the-city-of-london/wifi)\n\n",
      createdAt: "2022-09-22T23:01:06.544Z",
      updatedAt: "2022-09-23T21:47:44.670Z",
      publishedAt: "2022-09-22T23:01:07.478Z",
      category: "plan",
    },
  },
  {
    id: 21,
    attributes: {
      question: "What do I need to bring with me?",
      answer:
        "**•\tYour smartphone** – essential to enjoy and take part in the Maze of Adventures and The Hunt. You’ll need your phone to be able to access the Maze and Hunt. If you are in a couple or a group, you’ll need at least one phone between you all. You’ll be using data to access the smartphone adventures so please ensure you have enough data for the day. \n\n**•\tHeadphones** – recommended for the Maze of Adventures and The Hunt. You can listen to the adventures on your phone without headphones, especially if you are playing as a group. But you might find it easier to hear with headphones. \n\n**•\tBattery power pack** – recommended for the Maze of Adventures and The Hunt. You’ll be using your phone a lot throughout the day, so we recommend bringing a power pack to charge up your battery if you have one. Mobile phone charging points will be available at the three Fairs. \n\n**•\tA sense of adventure!** Get ready to explore the whole of the City. Your adventure awaits! \n",
      createdAt: "2022-09-22T22:54:25.727Z",
      updatedAt: "2022-09-23T21:50:53.279Z",
      publishedAt: "2022-09-22T22:54:26.850Z",
      category: "plan",
    },
  },
  {
    id: 14,
    attributes: {
      question: "Can I bring bikes to the event? ",
      answer:
        "Bikes are not permit at the Fairs, Maze or Hunt locations. In order to experience the best of The Golden Key we strongly recommend accessing the event on foot. \n\nYou can use your bike to come into and get around the City. Bike parking provision Information on bike parking can be found [<u>here.</u>\n](https://www.cityoflondon.gov.uk/services/parking/motorcycles-and-bicycles)",
      createdAt: "2022-09-21T22:45:23.210Z",
      updatedAt: "2022-09-23T16:51:26.993Z",
      publishedAt: "2022-09-21T22:45:24.257Z",
      category: "travel",
    },
  },
  {
    id: 18,
    attributes: {
      question: "How do I get into The Hunt?",
      answer:
        "The start location of The Hunt will be revealed by solving a puzzle, keep an eye on [<u>The Hunt page</u>](https://thegoldenkey.london/hunt.html) for clues!",
      createdAt: "2022-09-22T22:45:27.076Z",
      updatedAt: "2022-09-23T16:52:28.944Z",
      publishedAt: "2022-09-22T22:45:27.838Z",
      category: "plan",
    },
  },
  {
    id: 17,
    attributes: {
      question: "How do I get into The Maze?",
      answer:
        "Using our [<u>interactive map</u>](https://thegoldenkey.london/maze/maze-map.html), pick an adventure you’d like to do. Go to the start location for that adventure marked on the map. When you get there find a red door, ask the door keeper for the key. The key will provide you access to the adventure on your smartphone and away you go!\n\nOnce you reach the end of an adventure, you’ll find you are close to another door to start a new adventure or you can go to one of the Fairs to enjoy the rest of the programme or stop and have a break at one of the City fine restaurants, bars and cafes. How you play the game is up to you. \n",
      createdAt: "2022-09-22T22:42:39.640Z",
      updatedAt: "2022-09-23T16:52:33.661Z",
      publishedAt: "2022-09-22T22:42:40.468Z",
      category: "plan",
    },
  },
  {
    id: 16,
    attributes: {
      question: "How do I get into the Fairs?",
      answer:
        "The [<u>St Paul’s Fair</u>](https://thegoldenkey.london/fairs/st-pauls.html) is open access, you can entry from any direction with no specific entry point.  The Fire Finale in St Paul’s churchyard can be entered from one entrance point only, opposite Cannon Alley. \n\nThe [<u>London Wall Fair</u>](https://thegoldenkey.london/fairs/london-wall.html) is also open access, and you can enter from London Wall Place, The Museum of London or from the Bastion and Aston High walk.\n\nThe [<u>Guildhall Fair</u>](https://thegoldenkey.london/fairs/guildhall.html) has a dedicated entrance point on Aldermanbury, next to the West Wing Reception entrance.\n",
      createdAt: "2022-09-22T22:41:21.424Z",
      updatedAt: "2022-09-23T16:52:43.867Z",
      publishedAt: "2022-09-22T22:41:22.253Z",
      category: "plan",
    },
  },
  {
    id: 19,
    attributes: {
      question: "What happens if the Maze of Adventures is full? ",
      answer:
        "Our door keepers will let you know if any of the adventures are full or cannot be accessed for any reason. This will either mean a short wait at the start of the adventure before you can access it, or you can pick another adventure to go on. \n\nSome of the end locations have limited capacity so you may have a wait at the secret venue before you experience the special immersive experience. The Golden Key team will be on hand to assist you if needed. \n",
      createdAt: "2022-09-22T22:45:47.552Z",
      updatedAt: "2022-09-23T21:50:57.257Z",
      publishedAt: "2022-09-22T22:45:48.382Z",
      category: "plan",
    },
  },
  {
    id: 23,
    attributes: {
      question: "Where can I charge my phone? ",
      answer:
        "We recommend you bring a battery power pack if you have one, so you can charge your phone whilst you play the adventures.  \n\nOtherwise, there will be phone charging facilities available at each Fair location. The Golden Key event organisers take no responsibility for your phone whilst charging. \n",
      createdAt: "2022-09-22T23:01:38.667Z",
      updatedAt: "2022-09-23T21:51:15.259Z",
      publishedAt: "2022-09-22T23:01:39.700Z",
      category: "plan",
    },
  },
  {
    id: 30,
    attributes: {
      question: "What measures are in place to manage the visitor numbers? ",
      answer:
        "There is an audience management plan for the event and event staff at each site who are briefed appropriately. ",
      createdAt: "2022-09-22T23:16:43.601Z",
      updatedAt: "2022-09-24T08:17:44.836Z",
      publishedAt: "2022-09-22T23:16:44.365Z",
      category: "security",
    },
  },
  {
    id: 24,
    attributes: {
      question: "Can I bring… ",
      answer:
        "**•\tBags** – we recommend limiting the number of bags you bring to the event if possible. The Guildhall Fair will have security checks in place, with all bags being scanned when you enter inside the Guildhall. Some of the Maze locations also have security checks in place, so you will have to queue to get in. \n\n\n\n**•\tBuggies**  – We are unable to provide specific buggy parking at the event. Please keep your buggy with you at all times. You are responsible for the safety of your buggy if left unattended. \n\n**•\tPhotography equipment** - The streets are likely to be busy with visitors, and it is recommended that you do not bring camera tripods to The Golden Key. If you do bring tripods or selfie sticks with you, please use them sensibly. \n\n\n**•\tFood and drink** – Food and drink is permitted, but please do not bring glass or alcohol with you. There will also be an array of food and drink options at the Fairs, with street food trucks and bars. There are many fantastic food and drink options across the City as well that will welcome you on the day. See the [<u>Eat, Drink and Shop</u>](https://thegoldenkey.london/eat-drink-shop.html) page for details. \n\n\n**•\tAlcohol** – please do not bring alcohol with you. There will be two bars where you can purchase alcohol at the Guildhall and St Paul’s Fair. \n\n",
      createdAt: "2022-09-22T23:04:03.888Z",
      updatedAt: "2022-09-25T11:54:05.385Z",
      publishedAt: "2022-09-22T23:04:05.266Z",
      category: "plan",
    },
  },
  {
    id: 26,
    attributes: {
      question:
        "Will there be toilets and disabled toilet facilities available? ",
      answer:
        "Free toilets are available at each Fair, with disabled toilet facilities and baby changing. \n\nSt Paul’s Fair – Paternoster Lodge,\nGuildhall Fair – Guildhall Art Gallery,\nLondon Wall Fair – Museum of London,\n\nOn the Maze of Adventures and The Hunt toilet provision is limited. Some of the end locations for the Maze do have public toilets but it is not guaranteed. Check with the Golden Key Team at each end location for details. \n\nPublic toilet provision in the City of London can be found [<u>here. \n</u>](https://www.cityoflondon.gov.uk/services/streets/clean-streets/public-toilets)",
      createdAt: "2022-09-22T23:13:04.470Z",
      updatedAt: "2022-09-26T08:53:07.219Z",
      publishedAt: "2022-09-22T23:13:14.723Z",
      category: "plan",
    },
  },
  {
    id: 29,
    attributes: {
      question: "Who will be managing security at the event? ",
      answer:
        "Security at the event will be managed by a professional security and stewarding company, with qualified and trained personnel.\n\nStewards will be on hand through the event site to support and help audiences where required. Please follow their instructions when provided. \n\nThe team will be observing and monitoring all locations across the event and undertaking security checks at the Guildhall Fair and on some Maze end locations.\n\nAs part of the event planning there are emergency procedures in place should an incident occur. \n",
      createdAt: "2022-09-22T23:16:28.956Z",
      updatedAt: "2022-09-26T08:54:44.259Z",
      publishedAt: "2022-09-22T23:16:29.847Z",
      category: "security",
    },
  },
  {
    id: 28,
    attributes: {
      question: "Who can I ask for general assistance? ",
      answer:
        "The Golden Key will be on hand to help you through out the event. Look out staff wearing duck egg green Golden Key t-shirts. Our team will be located throughout the Fair sites, at the start locations for The Maze and The Hunt and at each secret end location. \n\nA dedicated information point will be situated at each Fair location who can provide any assistance you might need. \n\nWe also have a team of security and stewards who will be in yellow high vis vests across all locations. They will be present to make sure the audiences are safe and enjoy the Golden Key Event. \n\n",
      createdAt: "2022-09-22T23:15:38.675Z",
      updatedAt: "2022-09-29T10:21:46.216Z",
      publishedAt: "2022-09-22T23:15:39.548Z",
      category: "plan",
    },
  },
  {
    id: 42,
    attributes: {
      question:
        "How do I get in touch with the event organisers before or after the event?",
      answer:
        "You can contact us on [destination.city@cityoflondon.gov.uk](mailto:destination.city@cityoflondon.gov.uk) for any event enquiries, feedback and complaints. ",
      createdAt: "2022-09-29T10:22:39.949Z",
      updatedAt: "2022-09-29T10:22:40.891Z",
      publishedAt: "2022-09-29T10:22:40.888Z",
      category: "plan",
    },
  },
  {
    id: 27,
    attributes: {
      question: "Are there covered areas if the weather is bad? ",
      answer:
        "The Golden Key has been programmed at indoor and outdoor locations or with covered areas to offer shelter in the event of adverse weather conditions.\n\nThe Guildhall Fair and London Wall Fair offer indoor or covered spaces. Activity takes place indoor and outside. \n\nThe St Paul’s Fair does not have any indoor or covered space. All activity takes place outside. \n\nThe Maze of Adventure takes place out outside for the majority of the adventure, you will be walking different routes across the City to reach your final secret destination.  Nine of the twelve end locations take place indoors. \n\nDespite the provision of indoor or covered space, please remember is event takes place in the autumn and weather will be variable. This means you should dress appropriately for the weather and be prepared if it rains or if it is cold. \n\nThe Maze of Adventure and The Hunt involves walking for between 15 – 30 minutes per adventure, sensible and comfy footwear is advised. \n",
      createdAt: "2022-09-22T23:14:49.637Z",
      updatedAt: "2022-09-23T21:46:37.616Z",
      publishedAt: "2022-09-22T23:14:50.587Z",
      category: "plan",
    },
  },
  {
    id: 34,
    attributes: {
      question: "I live / work near the event. How will it affect me? ",
      answer:
        "Event activity is happening near to local businesses and residents. However, we do not anticipate disruptions caused by the event. \n",
      createdAt: "2022-09-22T23:19:09.529Z",
      updatedAt: "2022-09-23T21:48:05.079Z",
      publishedAt: "2022-09-22T23:19:10.751Z",
      category: "local",
    },
  },
  {
    id: 31,
    attributes: {
      question: "Is first aid available? ",
      answer:
        "Yes. As part of the event organiser’s safety provision for The Golden Key, there will be medical provision on the ground during the event. We are also working closely with the emergency services to ensure a safe and enjoyable event for everyone",
      createdAt: "2022-09-22T23:16:57.553Z",
      updatedAt: "2022-09-23T21:48:29.257Z",
      publishedAt: "2022-09-22T23:16:58.498Z",
      category: "security",
    },
  },
  {
    id: 33,
    attributes: {
      question: "What plans are in place for lost persons?",
      answer:
        "Stewards will be on hand to support public safety, and this includes any reports of lost persons, responding to this accordingly. \n",
      createdAt: "2022-09-22T23:18:47.369Z",
      updatedAt: "2022-09-23T21:51:07.486Z",
      publishedAt: "2022-09-22T23:18:48.169Z",
      category: "security",
    },
  },
  {
    id: 35,
    attributes: {
      question:
        "Will any access to residential areas or businesses be restricted? ",
      answer:
        "No. All residents and businesses will have full access to their properties as normal. \n",
      createdAt: "2022-09-22T23:19:33.451Z",
      updatedAt: "2022-09-23T21:51:37.655Z",
      publishedAt: "2022-09-22T23:19:34.341Z",
      category: "local",
    },
  },
  {
    id: 41,
    attributes: {
      question: "Can I bring my dog to the event?",
      answer:
        "We recommend you do not bring your dog with you to the event. Although many of the sites are in public spaces, there are some event locations you will not be able to access if you have a dog. These include the Guildhall Fair and the majority of the end locations on the Maze of Adventures.\n\n \n\nIt is also likely to be a busy in the City and may not be the best environment for your dog. In order for you to maximise your enjoyment of the event and ensure the safety of your animal please leave your dog at home.\n\n \n\nThis is with the exception of guide dogs, which will be permitted in all event locations.",
      createdAt: "2022-09-22T23:45:09.193Z",
      updatedAt: "2022-09-23T21:47:12.022Z",
      publishedAt: "2022-09-22T23:45:09.845Z",
      category: "plan",
    },
  },
  {
    id: 25,
    attributes: {
      question: "Will there be food and drink at the event? ",
      answer:
        "There will be a dazzling array of hospitality businesses, retailers and leisure providers in the City opening their doors on a Saturday for the Golden Key. \n\nBars and pubs will be offering Golden Key themed cocktails; and dining options across the Square Mile will include bespoke menus offers.  Look out for mystical characters working in our shops & leisure outlets - and check out City hotels for competitive weekend packages.  \n\nIn addition, dozens of our venues will be throwing Golden Key After Parties from 6pm on 15th October, so you can continue to enjoy the best the City has to offer until late! You can check out who is taking part on our [<u>Eat, Drink & Shop </u> ](https://thegoldenkey.london/eat-drink-shop.html) page. \n\nSome of these Golden Key offers will require advance booking so do check out if an advance reservation is required.\n\nIf you are a City Business who would like to get involved in Golden Key, please email [<u>Destination.City@cityoflondon.gov.uk</u>](mailto:Destination.City@cityoflondon.gov.uk) for more information.\n\nThere will also be a variety of street food trucks and pop ups at the three Fairs, plus a bar at St Paul’s and Guildhall Fair, open from 12 – 6pm. \n",
      createdAt: "2022-09-22T23:12:15.809Z",
      updatedAt: "2022-09-26T08:53:48.333Z",
      publishedAt: "2022-09-22T23:12:16.656Z",
      category: "plan",
    },
  },
];

export { faqs };
