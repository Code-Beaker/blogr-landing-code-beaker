const navlinks = document.querySelectorAll(".navbar__links--link");
const dropdownIcons = document.querySelectorAll(".navbar__links--link__icon");
const dropdowns = document.querySelectorAll(".navbar__dropdown");

for (let i = 0; i <= navlinks.length; i++) {
  navlinks[i].addEventListener("click", () => {
    dropdownIcons[i].classList.toggle("drop-expanded");
    dropdowns[i].classList.toggle("dropdown-show");
  });
}
