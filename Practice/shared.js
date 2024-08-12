const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanBtn = document.querySelectorAll(".plan button");
const modalNoBtn = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

selectPlanBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    handleOpen([backdrop, modal]);
  });
});

if (modalNoBtn) {
  modalNoBtn.addEventListener("click", () => {
    handleClose([backdrop, modal]);
  });
}

backdrop.addEventListener("click", () => {
  if (modal) {
    handleClose([modal]);
  }
  handleClose([backdrop, mobileNav]);
});

toggleButton.addEventListener("click", () => {
  handleOpen([backdrop, mobileNav]);
});

const handleOpen = (elements) => {
  elements.forEach((el) => {
    el.classList.add("open");
  });
};

const handleClose = (elements) => {
  elements.forEach((el) => {
    el.classList.remove("open");
  });
};
