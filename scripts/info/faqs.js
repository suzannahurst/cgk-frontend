const showdown = window.showdown;
const converter = new showdown.Converter();

// scripts/index.js
export const fetchFaqs = () => {
  const faqsReq = new Request(
    "https://coney-golden-key.herokuapp.com/api/faqs",
  );

  fetch(faqsReq)
    .then((response) => response.json())
    .then((faqs) => {
      // let faqList = document.getElementById("faqList");
      let aboutList = document.getElementById("aboutList");
      let travelList = document.getElementById("travelList");
      let planList = document.getElementById("planList");
      let securityList = document.getElementById("securityList");
      let localList = document.getElementById("localList");
      let data = faqs.data;
      data.map((faq) => {
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
    })
    .catch((error) => {
      console.error("Error:", error);
    });
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

fetchFaqs();
// const showdown = window.showdown;
// const converter = new showdown.Converter();
// document.getElementById("fair-content").innerHTML = converter.makeHtml(
//   fair.content,
// );

// TODO best way to dynamically populate artists per page
