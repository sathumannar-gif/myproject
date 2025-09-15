const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu").querySelector("ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";

  setTimeout(() => {
    status.textContent = "Thanks! I will get back to you soon.";
    this.reset();
  }, 1000);
});