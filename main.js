let navBar = document.querySelector(".nav-bar");
let openMenu = document.querySelector(".menu-bar");
let closeMenu = document.querySelector(".close-bar");

openMenu.addEventListener("click", function () {
    navBar.classList.add("active");
});
closeMenu.addEventListener("click", function () {
    navBar.classList.remove("active");
});

// typing efffect

const dynmTxt = document.querySelector('#cnt #dynm');

const words = ["Web Developer", "Web Designer", "Graphic Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynmTxt.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

// 2nd typewriter effect

const dynamicTxt = document.querySelector('.static-text .dynamic-txt');
const word = ["Web Developer", "Web Designer", "Graphic Designer"];

let wordIndex1 = 0;
let charIndex1 = 0;
let isDeleting1 = false;


const typeWriter = () => {
    const currentWord = words[wordIndex1];
    const currentChar = currentWord.substring(0, charIndex1);
    dynamicTxt.textContent = currentChar;

    if (!isDeleting1 && charIndex1 < currentWord.length) {
        charIndex1++;
        setTimeout(typeWriter, 200);
    } else if (isDeleting1 && charIndex1 > 0) {
        charIndex1--;
        setTimeout(typeWriter, 100);
    } else {
        isDeleting1 = !isDeleting1;
        wordIndex1 = !isDeleting1 ? (wordIndex1 + 1) % words.length : wordIndex1;
        setTimeout(typeWriter, 1200);
    }
}

typeWriter();