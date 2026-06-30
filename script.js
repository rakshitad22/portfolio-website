/*=========================================
        RAKSHITA D PORTFOLIO
            script.js
=========================================*/


/*=========================================
        LOADING SCREEN
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },600);

    }

});


/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    header.classList.toggle("sticky",window.scrollY>80);

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-180;

        const sectionHeight=section.offsetHeight;

        if(window.scrollY>=sectionTop){

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


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
".card,.interest-card,.project-card,.edu-card,.about-content,.internship-card,.contact-box"
);

function reveal(){

    revealElements.forEach(element=>{

        const revealPoint=120;

        const windowHeight=window.innerHeight;

        const revealTop=element.getBoundingClientRect().top;

        if(revealTop<windowHeight-revealPoint){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/*=========================================
        TYPING EFFECT
=========================================*/

const typingTexts=[

"Aspiring Software Developer",

"Web Development Intern",

"AI Enthusiast",

"Full Stack Learner"

];

let textIndex=0;

let charIndex=0;

const typing=document.querySelector(".hero-text h2");

function typeEffect(){

    if(!typing) return;

    if(charIndex<typingTexts[textIndex].length){

        typing.textContent+=typingTexts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,90);

    }

    else{

        setTimeout(eraseEffect,1800);

    }

}

function eraseEffect(){

    if(charIndex>0){

        typing.textContent=typingTexts[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,40);

    }

    else{

        textIndex++;

        if(textIndex>=typingTexts.length){

            textIndex=0;

        }

        setTimeout(typeEffect,300);

    }

}

typing.textContent="";

typeEffect();


/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("show-top");

    }

    else{

        topBtn.classList.remove("show-top");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
        BUTTON HOVER
=========================================*/

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-6px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });

});


/*=========================================
        DARK / LIGHT MODE
=========================================*/

const themeToggle=document.getElementById("theme-toggle");

const currentTheme=localStorage.getItem("theme");

if(currentTheme==="light"){

    document.body.classList.add("light-mode");

    themeToggle.innerHTML='<i class="fas fa-sun"></i>';

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

        themeToggle.innerHTML='<i class="fas fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML='<i class="fas fa-moon"></i>';

    }

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("🚀 Portfolio Designed by Rakshita D");