const elBtn = document.querySelector("header button");
const elForm = document.querySelector(".form");

elBtn.addEventListener("click", () => {
  elForm.classList.toggle("hide");
});
