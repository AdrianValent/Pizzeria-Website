//script for navbar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".mobile-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// script for scrolling to the section

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// script for faq page

const burger = document.querySelector(".burger");
const faq = document.querySelector(".question-1");
const answer = document.querySelector(".answer-1");
const burger2 = document.querySelector(".burger-2")
const faq2 = document.querySelector(".question-2");
const answer2 = document.querySelector(".answer-2");

burger.addEventListener("click", faqOpen);
burger2.addEventListener("click", faqOpen2);

function faqOpen() {
    burger.classList.toggle("active");
    faq.classList.toggle("active");
    answer.classList.toggle("active");
}

function faqOpen2() {
    burger2.classList.toggle("active");
    faq2.classList.toggle("active");
    answer2.classList.toggle("active");
}