// scripts/index.js
export const fetchFaqs = () => {
  const faqsReq = new Request(
    "https://coney-golden-key.herokuapp.com/api/faqs",
  );

  fetch(faqsReq)
    .then((response) => response.json())
    .then((faqs) => {
      let faqList = document.getElementById("faqList");

      faqs.forEach((fair) => {
        fairList.appendChild(displayFaq(faq));
      });
      console.log(faqs);
      return faqs;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const displayFaq = (faq) => {
  const { question, answer } = faq.data.attributes;

  console.log(faq.data.attributes);

  const li = document.createElement("li");
  li.innerHTML = `<h3 class="subtitle">${question} </h3>
          <p class="maintext"> ${answer}</p>
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
