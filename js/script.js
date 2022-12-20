{
const welcome = () => {
    console.log("Hello!");
}

const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("light");
    themeName.innerText = body.classList.contains("light") ? "Ciemny" : "Jasny";
}

const init = () => {
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
}

init();
}