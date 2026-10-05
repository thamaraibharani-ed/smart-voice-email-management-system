// Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully.");
});
// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});