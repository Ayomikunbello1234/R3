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