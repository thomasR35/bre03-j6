document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section");
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    section.classList.toggle("short");
    section.classList.toggle("long");
  });
});
