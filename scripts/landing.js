const landing = document.getElementById("landing");
const scene = document.getElementById("scene");
const overlay = document.getElementById("overlay");

landing.addEventListener("click", () => {
  gsap.to(".black", {
    y: -400,
    duration: 5,
    scale: 8,
    opacity: 0,
    // ease: "power1.out",
  });
  overlay.classList.add("fade-in");
  // gsap.to(".scene", {
  //   delay: 0.5,
  //   duration: 5,
  //   scale: 1.2,
  //   opacity: 1,
  //   // ease: "power1.out",
  // });

  setTimeout(overlay.classList.add("reveal"), 5000);

  gsap.to(".info-wrapper", {
    // delay: 1,
    // duration: 4,
    backgroundColor: "#EA9E25",
    border: " #fff 1px solid",
    //   ease: "power1.out",
  });
});
