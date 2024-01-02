const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Sélection des éléments du DOM

let slidePosition = 0;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector("#banner .banner-img");
const bannerTxt = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const pathImg = "assets/images/slideshow/";

// 2) Ajoutez des Event Listeners sur les flèches

arrowLeft.addEventListener("click", () => changeSlide(-1));
arrowRight.addEventListener("click", () => changeSlide(1));

// 3) Ajoutez des bullet points au slider

function updateDots() {
	let dotsHTML = '';
  
	for (let i = 0; i < slides.length; i++) {
	  const dotClass = (i === slidePosition) ? ' dot_selected' : '';
	  dotsHTML += `<div class="dot${dotClass}"></div>`;
	}
  
	dotsContainer.innerHTML = dotsHTML;
  }
  
updateDots(); // Affichage initial des bullet points

// 4) Modifiez le slide au clic sur le bouton

function changeSlide(direction) {
  slidePosition += direction;

  if (slidePosition < 0) {
    slidePosition = slides.length - 1;
  } else if (slidePosition >= slides.length) {
    slidePosition = 0;
  }

  updateSlide();
}

// 5) Mise en place du défilement infini sur le carrousel

function changeSlide(direction) {
	slidePosition += direction;
  
	if (slidePosition < 0) {
	  slidePosition = slides.length - 1;
	} else if (slidePosition >= slides.length) {
	  slidePosition = 0;
	}
  
	const { tagLine, image } = slides[slidePosition];
	bannerTxt.innerHTML = tagLine;
	bannerImg.src = pathImg + image;
	updateDots(); // Mettre à jour les bullet points à chaque changement de slide
  }
  