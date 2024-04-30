const menuToggle = document.querySelector(".menuToggle");
const menu = document.querySelector(".menu");

menuToggle.onclick = function(){
    menu.classList.toggle("active");
};