const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");
const btnsOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".back-modal");
const bookmark = document.querySelector(".span");
const bookmarkText = bookmark.querySelector("p");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

bookmarkText.addEventListener("click", () => {
  bookmarkText.style.color = "green";
  bookmarkText.textContent = "Bookmarked";
  const bookmarkImg = bookmark.querySelector("img");
  if (bookmarkImg) {
    const svgPath = bookmarkImg.querySelector("svg circle");
    if (svgPath) {
      svgPath.setAttribute("fill", "green");
    }
  }
});

const openModal = function () {
  modal.classList.remove("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);
