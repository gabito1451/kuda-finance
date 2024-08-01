const helpMenuItem = document.querySelector(".help-menu-item");
const companyMenuItem = document.querySelector(".company-menu-item");
const modalOverlay = document.querySelector(".modal-overlay");
const companyDropDown = document.querySelector(".companyDropDown");
const helpDropDown = document.querySelector(".helpDropDown");

helpMenuItem.addEventListener("mouseenter", (e) => {
  helpDropDown.style.display = "flex";
  modalOverlay.style.display = "block";
  modalOverlay.style.opacity = "1";
});

companyMenuItem.addEventListener("mouseenter", (e) => {
  companyDropDown.style.display = "flex";
  modalOverlay.style.display = "block";
  modalOverlay.style.opacity = "1";
});

modalOverlay.addEventListener("mouseover", (e) => {
  helpDropDown.style.display = "none";
  companyDropDown.style.display = "none";
  modalOverlay.style.opacity = "0";
  modalOverlay.style.display = "none";
});
