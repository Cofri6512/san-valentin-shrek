let current = 1;

function nextStep() {
  document.getElementById(`step${current}`).classList.remove("active");
  current++;
  document.getElementById(`step${current}`).classList.add("active");
}
