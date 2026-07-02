// ===========================
// DARK / LIGHT MODE
// ===========================

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// ===========================
// TYPING EFFECT
// ===========================

const text = "Cloud & DevOps Engineer";
const heading = document.querySelector(".hero-left h3");

let index = 0;

function typingEffect() {

    if(index < text.length){

        heading.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect,100);

    }

}

heading.textContent="";

typingEffect();

// ===========================
// SCROLL ANIMATION
// ===========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const position = section.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(position < screen-120){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }

    });

});

// Initial State

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="1s";

});

// ===========================
// ACTIVE NAV LINK
// ===========================

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(pageYOffset>=sectionTop-200){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#38bdf8";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// CARD HOVER EFFECT
// ===========================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ===========================
// PROJECT CARD ANIMATION
// ===========================

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,#38bdf8 0%,#1e293b 60%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#1e293b";

});

});

// ===========================
// PAGE LOADER
// ===========================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";
document.body.style.opacity="1";

},100);

});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log("Welcome to Vivek Patyal Portfolio 🚀");