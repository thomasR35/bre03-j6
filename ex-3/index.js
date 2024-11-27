document.addEventListener("DOMContentLoaded", () => {
  let sectionTextSize = document.getElementById("size");
  let headerColor = document.getElementById("color");
  let headerH2 = document.querySelector("header h2");

  sectionTextSize.addEventListener("change", () => {
    let size = sectionTextSize.value;
    document.body.classList.toggle(size);
  });

  headerColor.addEventListener("change", () => {
    let color = headerColor.value;
    headerH2.classList.toggle(color);
  });
});
