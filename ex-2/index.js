document.addEventListener("DOMContentLoaded", () => {
  let pink = document.getElementById("pinkTab");
  let blue = document.getElementById("blueTab");
  let pinkButton = document.getElementById("pinkTabButton");
  let blueButton = document.getElementById("blueTabButton");

  blueButton.addEventListener("click", () => {
    pink.classList.remove("active");
    blue.classList.add("active");
    pinkButton.classList.remove("active");
    blueButton.classList.add("active");
  });

  pinkButton.addEventListener("click", () => {
    blue.classList.remove("active");
    pink.classList.add("active");
    blueButton.classList.remove("active");
    pinkButton.classList.add("active");
  });
});
