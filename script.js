const clearBtn = document.querySelector(".clear");
const resultsWrapper = document.querySelector(".results-wrapper");
const formControl = document.querySelector(".form-control");
const searchForm = document.querySelector(".search-form");

window.addEventListener("click", (event) => {
  if (!event.target.closest(".searchForm")) {
    clearFields();
    hiddenClearBtn();
  }
});

formControl.addEventListener("input", (event) => {
  toggleVisibleClearBtn(event);
});

clearBtn.addEventListener("click", clearFields);

function toggleVisibleClearBtn(event) {
  event.target.value.length > 0 ? showClearBtn() : hiddenClearBtn();
}
function showClearBtn() {
  clearBtn.style.display = "block";
}

function hiddenClearBtn() {
  clearBtn.style.display = "none";
}

function clearFields() {
  resultsWrapper.innerHTML = "";
  formControl.value = "";
}
