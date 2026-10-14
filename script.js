
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully.");

    // Smooth scrolling for internal navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const href = link.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Update the URL hash without an abrupt jump
                if (window.location.hash !== href) {
                    history.replaceState(null, "", href);
                }
            }
        });
    });

    // Highlight the navigation link for the current section
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;

                        navLinks.forEach(function (navLink) {
                            const isActive =
                                navLink.getAttribute("href") === "#" + sectionId;

                            if (isActive) {
                                navLink.setAttribute("aria-current", "location");
                            } else {
                                navLink.removeAttribute("aria-current");
                            }
                        });
                    }
                });
            },
            {
                rootMargin: "-20% 0px -65% 0px",
                threshold: 0
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

    // Update the footer year automatically
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            "\u00A9 " + new Date().getFullYear() +
            " Thamaraibharani P. All Rights Reserved.";
    }
});
