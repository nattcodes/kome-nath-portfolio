//menu bar
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".nav-links");
const cancelBtn = document.querySelector(".cancel-btn");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

// window.onscroll = ()=>{
//     this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
// }
//-----------menu bar

//dark and light mode
const icon = document.getElementById("icon");
icon.onclick = ()=>{
     document.body.classList.toggle("dark-theme");
     if(document.body.classList.contains("dark-theme")){
         icon.src = "assests/moon.png";
     }else{
         icon.src = "assests/sun.png";
     }
}
//-----------dark and light mode

//contact pop-up
function toggle(){
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
}
//-----------contact pop-up

// -------------sticky nav
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
// -------------sticky nav

// -------------scroll animation
const scroll = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 1000,
    reset: false
});

scroll.reveal('.about-h1, .about-box, .skill-h1, .skill-box, .project-h1, .project-box, .contact-h1, .contact-links');
// -----------x--scroll animation

