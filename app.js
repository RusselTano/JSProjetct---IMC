const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const inputTaille = document.getElementById("taille");
const inputPoids = document.getElementById("poids");
const calculButton = document.querySelector(".imc__calcul-button");
const resultat = document.querySelector(".imc__resultat");
const infosResultat = document.querySelector(".imc__infos-resultat");

let imc = 0;

calculButton.addEventListener("click", () => {

  if(inputPoids.textContent == "" || inputTaille.textContent === ""){
    resultat.textContent = "Veuillez remplir les inputs"
  }

  imc = inputPoids.value / (inputTaille.value / 100)**2;
  console.log(imc);

  resultat.textContent = imc.toFixed(2);

  if (imc < 18.5) {
    infosResultat.textContent = `Resultat : ${BMIData[0].name}`;
    resultat.style.color = BMIData[0].color;
  }
  else if(imc < 25){
    infosResultat.textContent = `Resultat : ${BMIData[1].name}`;
    resultat.style.color = BMIData[1].color;
  }
  else if(imc < 30){
    infosResultat.textContent = `Resultat : ${BMIData[2].name}`;
    resultat.style.color = BMIData[2].color;
  }
  else if(imc < 35){
    infosResultat.textContent = `Resultat : ${BMIData[3].name}`;
    resultat.style.color = BMIData[3].color;
  }
  else if(imc < 40){
    infosResultat.textContent = `Resultat : ${BMIData[4].name}`;
    resultat.style.color = BMIData[4].color;
  }
  else {
    infosResultat.textContent = `Resultat : ${BMIData[5].name}`;
    resultat.style.color = BMIData[5].color;
  }
})

console.log(
  infosResultat,
  inputPoids,
  inputTaille,
  calculButton,
  resultat,
  infosResultat
);
