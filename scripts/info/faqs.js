const showdown = window.showdown;
const converter = new showdown.Converter();
import { faqs } from "./data.js";

// export const fetchFaqs = () => {
// const faqsReq = new Request(
//   "https://coney-golden-key.herokuapp.com/api/faqs?populate=*",
// );

// fetch(faqsReq)
//   .then((response) => response.json())
//   .then((faqs) => {
//     console.log(JSON.stringify(faqs));
//     // let faqList = document.getElementById("faqList");
//     let aboutList = document.getElementById("aboutList");
//     let travelList = document.getElementById("travelList");
//     let planList = document.getElementById("planList");
//     let securityList = document.getElementById("securityList");
//     let localList = document.getElementById("localList");
//     let data = faqs.data;
//     data.map((faq) => {
//       // console.log(faq);
//       switch (faq.attributes.category) {
//         case "about":
//           aboutList.appendChild(displayFaq(faq));
//           break;
//         case "travel":
//           travelList.appendChild(displayFaq(faq));
//           break;
//         case "plan":
//           planList.appendChild(displayFaq(faq));
//           break;
//         case "security":
//           console.log("security");
//           securityList.appendChild(displayFaq(faq));
//           break;
//         case "local":
//           localList.appendChild(displayFaq(faq));
//           break;
//         default:
//           aboutList.appendChild(displayFaq(faq));
//       }
//     });
//     // console.log(faqs);
//     return faqs;
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// };

export const sortFAQs = (faqs) => {
  // let faqList = document.getElementById("faqList");
  let aboutList = document.getElementById("aboutList");
  let travelList = document.getElementById("travelList");
  let planList = document.getElementById("planList");
  let securityList = document.getElementById("securityList");
  let localList = document.getElementById("localList");

  faqs.map((faq) => {
    // console.log(faq);
    switch (faq.attributes.category) {
      case "about":
        aboutList.appendChild(displayFaq(faq));
        break;
      case "travel":
        travelList.appendChild(displayFaq(faq));
        break;
      case "plan":
        planList.appendChild(displayFaq(faq));
        break;
      case "security":
        console.log("security");
        securityList.appendChild(displayFaq(faq));
        break;
      case "local":
        localList.appendChild(displayFaq(faq));
        break;
      default:
        aboutList.appendChild(displayFaq(faq));
    }
  });
  // console.log(faqs);
  return faqs;
};

export const displayFaq = (faq) => {
  const { question, answer } = faq.attributes;

  const li = document.createElement("li");
  li.classList.add("faqItem", "listItem");
  // li.innerHTML =
  li.innerHTML = `<h3 class="">${question} </h3>${converter.makeHtml(answer)}
`;

  return li;
};

sortFAQs(faqs);
// const showdown = window.showdown;
// const converter = new showdown.Converter();
// document.getElementById("fair-content").innerHTML = converter.makeHtml(
//   fair.content,
// );
