const landing = document.getElementById("landing");
const keyhole = document.getElementById("keyholeBlack");
const overlay = document.getElementById("overlay");

landing.addEventListener("click", () => {
  gsap.to(".black", {
    y: -400,
    duration: 4,
    scale: 8,
    opacity: 0,
    // ease: "power1.out",
  });
  // overlay.classList.add("fade-in");
  gsap.to(".overlay", {
    delay: 1,
    duration: 5,
    scale: 1,
    opacity: 1,
    //   // ease: "power1.out",
  });

  // setInterval(() => {
  //   keyhole.classList.add("hide");
  // }, 5000);

  gsap.to(".info-wrapper", {
    delay: 1,
    duration: 4,
    backgroundColor: "#e86530",
    border: " #fff 1px solid",
    ease: "power1.out",
  });
});
