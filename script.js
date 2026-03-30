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

// 🔥 MEME SLIDER

const track = document.getElementById("memeTrack");
const leftBtn = document.querySelector(".meme-btn.left");
const rightBtn = document.querySelector(".meme-btn.right");

if(track){

  leftBtn.onclick = () => {
    track.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  rightBtn.onclick = () => {
    track.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

}

// 🔍 LIGHTBOX

const images = document.querySelectorAll(".meme-track img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

images.forEach(img => {
  img.onclick = () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  };
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if(e.target !== lightboxImg){
    lightbox.style.display = "none";
  }
};