console.log("js  loaded");

const changing = document.getElementById("changing");
const words = ["using", "ducing", "cycling"];
let index = 0;

setInterval(( ) => {
    changing.style.opacity = 0;

setTimeout(() => {
    index = (index + 1) % words.length;
    changing.textContent = words[index];
    changing.style.opacity = 1;
}, 500);
},2000);


const sections = document.querySelectorAll(".reveal");

window.addEventListener( "scroll",  () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
})


const carousel = document.querySelector(".carousel");
const carouselCard = document.querySelector(".carousel-card");
const slides = document.querySelectorAll(".mission-img");
const dots = document.querySelectorAll(".dots");

let currentSlide = 0;

function showSlide() {
    const slideWidth = carousel.clientWidth;

    carouselCard.style.transform =
        `translateX(-${currentSlide * slideWidth}px)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");
}

 function nextslide(){
    currentSlide++;
    if (currentSlide >= slides.length){
        currentSlide = 0;
    }
    showSlide();
 }
 showSlide();
 
 setInterval(nextslide, 3000);


window.addEventListener("resize", showSlide);

