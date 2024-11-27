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

/*document.addEventListener('DOMContentLoaded', () => {
   let buttons = document.querySelectorAll('button');

   for (let button of buttons) {
       button.addEventListener('click', (e) => {

          let pinkBtn = document.querySelector('#pinkTabButton');
          let blueBtn = document.querySelector('#blueTabButton');
          let pinkTab = document.querySelector('#pinkTab');
          let blueTab = document.querySelector('#blueTab');

          pinkBtn.classList.toggle('active');
          blueBtn.classList.toggle('active');
          blueTab.classList.toggle('active');
          pinkTab.classList.toggle('active');

       });
   }
});*/
