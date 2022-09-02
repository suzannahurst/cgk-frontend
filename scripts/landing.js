const landing = document.getElementById("landing");
const scene = document.getElementById("scene");

landing.addEventListener("click", () => {
  // scene.addClass("show");
  gsap.to(".black", {
    duration: 5,
    scale: 8,
    opacity: 0,
  });
  gsap.to(".scene", {
    delay: 1,
    duration: 3,
    scale: 1,
    opacity: 1,
  });
  gsap.to(".info-wrapper", {
    delay: 3,
    duration: 5,
    backgroundColor: "#EA9E25",
    border: " #fff 1px solid",
  });
});
