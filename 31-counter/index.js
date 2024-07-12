let count = 0;
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let value = document.querySelector("#value");

increase.addEventListener("click", () => {
  count++;
  printResult();
  value.textContent = count;
});
decrease.addEventListener("click", () => {
  count--;
  printResult();
  value.textContent = count;
});

function printResult() {
  if (count > 0) {
    value.style.color = "green";
  } else {
    value.style.color = "red";
  }
}
reset.addEventListener("click", () => {
  count = 0;
  if (count == 0) {
    value.style.color = "#222";
  }
  value.textContent = count;
});
