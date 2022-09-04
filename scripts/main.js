const cookieConsent = new CookieConsent({
  contentUrl: "/node_modules/cookie-consent-js/cookie-consent-content", // location of the language files
  privacyPolicyUrl: "./../info/privacy-policy.html",
});

console.log(cookieConsent);

const cookieSettings = document.getElementById("cookieSettings");

cookieSettings.addEventListener("click", () => {
  cookieConsent.reset();
});
