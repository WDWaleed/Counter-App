let currentCount;
let count;
window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    clickToCount();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    clickToSave();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Delete') {
    clickToReset()
  }
});

function clickToCount() {
  count = document.querySelector(".count");
  currentCount = Number(count.innerHTML);

  let newCount = currentCount + 1;
  count.innerHTML = newCount;
}

function clickToSave() {
  savedContainer = document.querySelector(".saved-count");
  count = document.querySelector(".count");
  currentCount = Number(count.innerHTML);

  if (savedContainer.innerHTML == "") {
    savedContainer.innerHTML = currentCount;
  } else {
    savedContainer.innerHTML += " - " + currentCount;
  }
}

function clickToReset() {
  document.querySelector(".count").innerHTML = 0;
}
