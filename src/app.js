const navlink = document.querySelectorAll(".navbar__links--link");
const dropdownIcon = document.querySelectorAll(".navbar__links--link__icon");

for (let i = 0; i <= navlink.length; i++) {
  navlink[i].addEventListener("click", () => {
    dropdownIcon[i].classList.toggle("drop-expanded");
  });
}
