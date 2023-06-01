let toggler = document.querySelector(".toggler");
let navbar = document.querySelector(".nav-bar");
let header = document.querySelector(".header");
let scroll__top = document.querySelector(".scroll__top");
let home_section = document.querySelector(".home-section")
const mood = document.querySelector(".mode");

toggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
})
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        header.classList.add("active");
        navbar.classList.remove("active");
        scroll__top.classList.add("active")
    }
    else {
        scroll__top.classList.remove("active")
        header.classList.remove("active")

    }
});
// dark mode
mood.addEventListener("click",()=>{
    document.body.classList.toggle("active__mode");
});
// scroll to top 
scroll__top.addEventListener("click",()=>{
    home_section.scrollIntoView({behavior:"smooth"});
    console.log(home_section);
})