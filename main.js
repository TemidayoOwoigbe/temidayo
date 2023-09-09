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
const dynamicTxt = document.querySelector('.static-text .dynamic-txt');

const words = ["Web Developer", "Web Designer", "Graphic Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynmTxt.textContent = currentChar;
    dynamicTxt.textContent = currentChar;

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

// close nav-ber when a link is clicked

document.querySelector(".nav-bar").addEventListener("click", (e) => {
    if (e.target.classList.contains("link")) {
        navBar.classList.remove("active");
    }
})

// form validation

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // variables

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let message = document.querySelector("#message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        console.log("helloworld");
        const errorMessage = document.querySelector(".error");
        errorMessage.style.display = "block";
        errorMessage.firstElementChild.classList.add("fa-xmark")
        errorMessage.lastElementChild.textContent = "Please make sure all input fields are filled";
        setTimeout(() => {
            document.querySelector(".error").style.display = "none";
        }, 3000)
    } else {

        const successMessage = document.querySelector(".success");
        successMessage.style.display = "block";
        successMessage.firstElementChild.classList.add("fa-check")
        successMessage.lastElementChild.textContent = "Your Message is on it's way to Temidayo";
        setTimeout(() => {
            document.querySelector(".success").style.display = "none";
        }, 3000)


        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#subject").value = "";
        document.querySelector("#message").value = "";

        

        console.log("hello-world")

    }


})

//
