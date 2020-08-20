const arrow = document.getElementById("drop-down-arrow");
const dropDownMenu = document.getElementsByClassName("dropdown-menu");

arrow.addEventListener("click", function () {
  dropDownMenu.classList.remove("hidden");
  dropDownMenu.classList.addEventListener("flex");
});
