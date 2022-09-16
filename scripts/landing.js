const landing = document.getElementById("landing");
// const keyhole = document.getElementById("keyhole");
// const overlay = document.getElementById("overlay");

// const enterBtn = document.getElementById("enterBtn");

// const anim = () => {
//   gsap.to(".black", {
//     y: -400,
//     duration: 4,
//     scale: 8,
//     opacity: 0,
//     // ease: "power1.out",
//   });
//   // overlay.classList.add("fade-in");
//   gsap.to(".overlay", {
//     delay: 1,
//     duration: 5,
//     scale: 1,
//     opacity: 1,
//     //   // ease: "power1.out",
//   });

//   // setInterval(() => {
//   //   keyhole.classList.add("hide");
//   // }, 5000);

//   gsap.to(".info-wrapper", {
//     delay: 1,
//     duration: 4,
//     backgroundColor: "#e86530",
//     border: " #fff 1px solid",
//     ease: "power1.out",
//   });
// };

// keyhole.addEventListener("click", () => {
//   anim();
//   setInterval(() => {
//     window.location.href = "./signup.html";
//   }, 7000);
// });

// const enterBtn = document.getElementById("enterBtn");
// const infoWrapper = document.getElementById("infoWrapper");

// const anim = () => {
//   gsap.to(".keyhole", {
//     y: 100,
//     duration: 4,
//     scale: 6,
//     ease: "power1.out",
//   });
//   gsap.to(".info-wrapper", {
//     display: "initial",
//     delay: 1,
//     zIndex: 99999,
//     duration: 4,
//     backgroundColor: "#e86530",
//     border: " #fff 1px solid",
//     ease: "power1.out",
//     margin: "0 1.5rem",
//     y: -100,
//   });
//   gsap.to(".logo", {
//     duration: 1,
//     opacity: 0,
//   });
// };

// const anim = () => {
//   gsap.to(".info-wrapper", {
//     display: "initial",
//     delay: 1,
//     zIndex: 99999,
//     duration: 4,
//     backgroundColor: "#e86530",
//     border: " #fff 1px solid",
//     ease: "power1.out",
//     margin: "0 1.5rem",
//     y: -100,
//   });
//   gsap.to(".logo", {
//     duration: 1,
//     opacity: 0,
//   });
// };

// enterBtn.addEventListener("click", () => {
//   anim();
//   setInterval(() => {
//     landing.classList.add("fixed", "animated");
//   }, 2000);
//   setInterval(() => {
//     window.location.href = "./signup.html";
//   }, 7000);
// });

// landing.addEventListener("click", () => {
//   // anim();

//   // setInterval(() => {
//   window.location.href = "./signup.html";
//   // }, 7000);
// });

const anim = () => {
  gsap.to(".title", {
    duration: 1.5,
    opacity: 0,
    display: "none",
  });
  gsap.to(".date", {
    delay: 2,
    duration: 1,
    opacity: 1,
    display: "initial",
  });
  gsap.to(".date", {
    delay: 5,
    duration: 1,
    opacity: 0,
    display: "none",
  });
  gsap.to(".key-wrapper", {
    delay: 6,
    duration: 3,
    opacity: 0,
  });

  gsap.to(".strapline", {
    delay: 6.5,
    duration: 3,
    opacity: 1,
    display: "initial",
  });
};

landing.addEventListener("click", () => {
  anim();

  setInterval(() => {
    window.location.href = "./signup.html";
  }, 11000);
});
