document.getElementById("nameInput").addEventListener("input", function (e) {
  document.getElementById("namePreview").textContent = e.target.value;
});

document.getElementById("ageInput").addEventListener("input", function (e) {
  document.getElementById("agePreview").textContent = "Age: " + e.target.value;
});

document.getElementById("bioInput").addEventListener("input", function (e) {
  document.getElementById("bioPreview").textContent = e.target.value;
});
