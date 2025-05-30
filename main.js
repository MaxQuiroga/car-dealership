// Element references
let search = document.querySelector(".search-box");
let menu = document.querySelector(".nav-links");
let header = document.querySelector("header");

// Toggle search box
document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  menu.classList.remove("active");
};

// Toggle menu
document.querySelector("#menu-icon").onclick = () => {
  menu.classList.toggle("active");
  search.classList.remove("active");
};

// Add shadow on scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

//Hide menu on scroll
window.onscroll = () => {
  menu.classList.remove("active");
  search.classList.remove("active");
};

// --- Slider for Parts ---
const partsContainer = document.querySelector('.parts-container');
// --- End slider for Parts ---

// --- Highlight navigation link when scrolling ---
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // 50px para compensar el header fijo
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);
window.addEventListener('load', scrollActive);
// --- End highlight navigation link ---
