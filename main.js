const helpMenuItem = document.querySelector(".help-menu-item");
const companyMenuItem = document.querySelector(".company-menu-item");
const modalOverlay = document.querySelector(".modal-overlay");
const companyDropDown = document.querySelector(".companyDropDown");
const helpDropDown = document.querySelector(".helpDropDown");

helpMenuItem.addEventListener("mouseover", (e) => {
  helpDropDown.style.display = "flex";
  modalOverlay.style.display = "block";
  modalOverlay.style.opacity = "1";
});

companyMenuItem.addEventListener("mouseover", (e) => {
  companyDropDown.style.display = "flex";
  modalOverlay.style.display = "block";
  modalOverlay.style.opacity = "1";
});

modalOverlay.addEventListener("mouseover", (e) => {
  helpDropDown.style.display = "none";
  companyDropDown.style.display = "none";
  modalOverlay.style.opacity = "0";
  setTimeout(() => {
    modalOverlay.style.display = "none";
  }, 1500);
});
