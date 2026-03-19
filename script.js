const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.onclick = () => {
menu.classList.toggle("show");
};

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.85;

if(top < trigger){
section.classList.add("show");
}

});

});