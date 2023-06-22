
const searchHotels = document.querySelector(".search-hotels");
const modalForm = document.querySelector(".modal-form");
const nameDate = modalForm.querySelector("[name=check-in]");
const departureDate = modalForm.querySelector("[name=departure]");
const grownCount = modalForm.querySelector("[name=grown]");
const childrenCount = modalForm.querySelector("[name=children]");

let isStorageSupport = true;
let grownStorage = "";
let childrenStorage = "";

try {
  grownStorage = localStorage.getItem("grownCount");
  childrenStorage = localStorage.getItem("childrenCount");
} catch (err) {
  isStorageSupport = false;
}
searchHotels.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.toggle("modal-show");
  nameDate.focus();
  if (grownStorage && childrenStorage) {
    grownCount.value = grownStorage;
    childrenCount.value = childrenStorage;
  }
  if (errorMessage.classList.contains("modal-error")) {
    errorMessage.classList.remove("modal-error");
  }
  if (modalForm.classList.contains("modal-show")) {
    modalForm.classList.add("form-animation");
  }
});
 
// Выделение позиций
modalForm.addEventListener("submit", function (evt) {
  if (!nameDate.value || !departureDate.value || !grownCount.value) {
    evt.preventDefault();
    modalForm.classList.remove("modal-error");
    modalForm.offsetWidth = modalForm.offsetWidth;
    modalForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", nameDate.value, departureDate.value, grownCount.value);
    }
  }
}); 

// Закрытие Esc 
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalForm.classList.contains("modal-show")) {
      evt.preventDefault();
      modalForm.classList.remove("modal-show");
    }
  }
});