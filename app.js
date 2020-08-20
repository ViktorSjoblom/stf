const arrow = document.getElementById("drop-down-arrow");
const dropDownMenu = document.getElementById("dropdown-menu");

arrow.addEventListener("click", function () {
  dropDownMenu.classList.toggle("flex");
});
