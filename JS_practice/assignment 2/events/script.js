const out = document.getElementById("output");

// Mouse: click
document.getElementById("mouseBox").addEventListener("click", function () {
  this.style.backgroundColor = "lightgreen";
  out.textContent = "Mouse Click Event Triggered!";
});

// Keyboard: keydown
document.getElementById("keyInput").addEventListener("keydown", function (event) {
  out.textContent = `Key pressed: ${event.key}`;
});

// Form: submit
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("nameInput").value;
  out.textContent = `Form submitted! Hello, ${name}.`;
});

// Window: resize
window.addEventListener("resize", function () {
  out.textContent = "Window resized!";
});
