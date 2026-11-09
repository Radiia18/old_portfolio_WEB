const scrollTopBtn = document.getElementById("scrollTopBtn");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("show", window.scrollY > 300);
});


scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


hamburger.addEventListener("click", function () {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("open", !isOpen);
});


menu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        menu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    }
});


document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        menu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    }
});
