document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    const section = document.querySelector("article section");
    section.classList.toggle("short");
    section.classList.toggle("long");
  });
});
