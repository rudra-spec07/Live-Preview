document.getElementById("nameInput").addEventListener("input", function (e) {
  document.getElementById("namePreview").textContent = e.target.value;
});

document.getElementById("ageInput").addEventListener("input", function (e) {
  document.getElementById("agePreview").textContent = "Age: " + e.target.value;
});

document.getElementById("bioInput").addEventListener("input", function (e) {
  document.getElementById("bioPreview").textContent = e.target.value;
});
let btn = document.getElementById("resetButton");
let body = document.body;
btn.addEventListener("click", function () {
  if (body.style.background === "linear-gradient(to right, #1d2671, #c33764") {
    body.style.background = "linear-gradient(to right, #6a11cb, #2575fc)";
  } else {
    body.style.background = "linear-gradient(to right, #1d2671, #c33764)";
  }
});