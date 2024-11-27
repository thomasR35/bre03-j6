let recipe = {
  ingredients: [
    "300g de farine",
    "3 oeufs",
    "1L de lait",
    "80g de beurre demi-sel",
  ],
  steps: [
    "Faire un nid avec la farine",
    "Casser les oeufs et les placer dans le nid",
    "Battre les oeufs et la farine en ajoutant doucement le lait",
    "Faire fondre le beurre",
    "Ajouter le beurre fondu à la pâte",
  ],
};

let ingredientsList = document.getElementById("ingredients");
let stepsList = document.getElementById("steps");

recipe.ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ingredientsList.appendChild(li);
});

recipe.steps.forEach((step) => {
  const li = document.createElement("li");
  li.textContent = step;
  stepsList.appendChild(li);
});
