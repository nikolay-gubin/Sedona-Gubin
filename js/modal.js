const searchHotels = document.querySelector(".search-hotels");
const modalSearch = document.querySelector(".modal-search");

let nameDate = modalSearch.querySelector("[name=check-in]");
let departureDate = modalSearch.querySelector("[name=departure]");
let adultsCount = modalSearch.querySelector("[name=grown]");
let childrenCount = modalSearch.querySelector("[name=children]");

let errorMessage = modalSearch.querySelector(".modal_error");

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
  modalSearch.classList.toggle("modal-show");
  nameDate.focus();
  if (grownStorage && childrenStorage) {
    grownCount.value = grownStorage;
    childrenCount.value = childrenStorage;
  }
  if (errorMessage.classList.contains("modal_error-show")) {
    errorMessage.classList.remove("modal_error-show");
  }
  if (modalSearch.classList.contains("modal-show")) {
    modalSearch.classList.add("modal_form-animation");
  }
});

modalSearch.addEventListener("submit", function (evt) {
  if (!nameDate.value || !departureDate.value || !grownCount.value || !childrenCount.value) {
    evt.preventDefault();
    errorMessage.classList.add("modal_error-show");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("grownCount", grownCount.value);
      localStorage.setItem("childrenCount", childrenCount.value);
      if (errorMessage.classList.contains("modal_error-show")) {
        errorMessage.classList.remove("modal_error-show");
      }
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (!modalSearch.classList.contains("modal_form-close")) {
      evt.preventDefault();
      modalSearch.classList.add("modal_form-close");
    }
    if (errorMessage.classList.contains("modal_error-show")) {
      evt.preventDefault();
      errorMessage.classList.remove("modal_error-show");
    }
  }
});

