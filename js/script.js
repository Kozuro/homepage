console.log("Hello!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("light");

    themeName.innerText = body.classList.contains("light") ? "Ciemny" : "Jasny";
});