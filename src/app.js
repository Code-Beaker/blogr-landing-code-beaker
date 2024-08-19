const navlinks = document.querySelectorAll(".navbar__links--link");
const dropdownIcons = document.querySelectorAll(".navbar__links--link__icon");

for (let i = 0; i <= navlinks.length; i++) {
  navlinks[i].addEventListener("click", () => {
    dropdownIcons[i].classList.toggle("drop-expanded");
  });
}
