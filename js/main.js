const hamBtn = document.querySelector(".hamburger");
const header = document.querySelector(".header");

hamBtn.addEventListener("click", e => {
    header.classList.toggle("open-menu")
})
