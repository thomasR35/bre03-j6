document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let error = document.querySelector("form p");
    if (password.value !== confirmPassword.value) {
      event.preventDefault();
      error.classList.add("show");
    } else {
      error.classList.remove("show");
    }
  });
});
