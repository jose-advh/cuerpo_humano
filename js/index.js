const buttonPrevious = document.getElementById("imgPrevious");
const buttonNext = document.getElementById("imgNext");
const evolutionText = document.getElementById("evolutionText");
const evolutionImage = document.getElementById("evolutionImage");
const evolutionImgZoom = document.getElementById("evolutionImgZoom");
const closeButton = document.getElementById("closeIcon");
const routes = ["ninos", "adolecentes", "adultos", "ancianos"];
const messages = [
  '"La niñez es donde nace la imaginación y se siembra la curiosidad."',
  '"La adolescencia es el caos hermoso de descubrir quién eres."',
  '"La adultez es el equilibrio entre sueños y responsabilidades."',
  '"La vejez es la calma de quien ya ha recorrido su camino."',
];
let contador = 0;

evolutionImage.addEventListener("click", () => {
  evolutionImgZoom.classList.remove("display-none");
});

closeButton.addEventListener("click", () => {
  evolutionImgZoom.classList.add("display-none");
});

buttonNext.addEventListener("click", () => {
  if (contador <= 2) {
    contador = contador + 1;
  } else {
    contador = 0;
  }

  document.getElementById(
    "evolutionImage"
  ).src = `../media/imgs/evolution/${routes[contador]}.jpg`;

  document.getElementById(
    "evolutionImageZoom"
  ).src = `../media/imgs/evolution/${routes[contador]}.jpg`;

  evolutionText.innerText = messages[contador];
});

buttonPrevious.addEventListener("click", () => {
  if (contador > 0) {
    contador = contador - 1;
  } else {
    contador = contador;
  }

  document.getElementById(
    "evolutionImage"
  ).src = `../media/imgs/evolution/${routes[contador]}.jpg`;

  document.getElementById(
    "evolutionImageZoom"
  ).src = `../media/imgs/evolution/${routes[contador]}.jpg`;

  evolutionText.innerText = messages[contador];
});
