window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    $headerBtn = document.getElementById("headerBtn");

    $headerBtn.addEventListener("click", (e) => {
        console.log("Button clicked");
        $nav = document.querySelector("body > header > nav");
        console.log($nav);
        $nav.classList.toggle("open");
    });
})