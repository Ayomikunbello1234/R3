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

const carouselCard = document.querySelector(".carousel-card");
const slides = document.querySelectorAll(".mission-img");
const dots = document.querySelectorAll(".carousel-dots .dots");

let currentSlide = 0;

function showSlide(index) {

    carouselCard.style.transform = `translateX(-${index * 500}px)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

const sections = document.querySelectorAll(".reveal");

window.addEventListener( "scroll",  () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
})