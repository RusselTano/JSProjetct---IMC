const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: [40, 1000] },
];

// IMC = poids en kg / taille² en m

//Methode : est une fonction qui est sous forme de propriete dans un objet
// Ex: addEventListener est une methode qui prend en parametre l'evenement et la callback function
// Callback function: function appele par une autre fonction

//truthy 12 "abc" [1,2,3]
// falsy "" 0 null undefined false

/**
 *   if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }
si je ne rempli pas la height donc c'est une chaine de caractere vide qui est falsy ca retourne false apres ca l'inverse a true et donc ca execute la condition
 */


const inputTaille = document.getElementById("taille");
const inputPoids = document.getElementById("poids");
const calculButton = document.querySelector(".imc__calcul-button");
const resultat = document.querySelector(".imc__resultat");
const infosResultat = document.querySelector(".imc__infos-resultat");
const form = document.querySelector("form");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  handleError();
}

function handleError() {
  if (
    inputPoids.value === "" ||
    inputTaille.value === "" ||
    inputPoids.value <= 0 ||
    inputTaille.value <= 0
  ) {
    resultat.textContent = "Veuillez remplir les inputs";
    resultat.style.color = "black";
  } else {
    calculateBMI();
  }
}

function calculateBMI() {
  let imc = 0;

  imc = inputPoids.value / (inputTaille.value / 100) ** 2;
  console.log(imc);

  showResult(imc);
}

function showResult(imc) {
  const rank = BMIData.find((data) => imc < data.range[1]);

  resultat.textContent = imc.toFixed(2);
  infosResultat.textContent = `Resultat : ${rank.name}`;
  resultat.style.color = rank.color;
}
