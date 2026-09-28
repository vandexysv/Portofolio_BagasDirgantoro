/* ==================================================
   MOBILE NAVIGATION
================================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* ==================================================
   CLOSE MOBILE MENU AFTER CLICK
================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const navigationLink =
            document.querySelector(
                `.nav-link[href="#${sectionId}"]`
            );

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove("active");

            });

            if (navigationLink) {

                navigationLink.classList.add("active");

            }

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".experience-card, .project-card, .skill-card, .info-card"
    );

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==================================================
   CONTACT FORM
================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.style.display = "block";

        formMessage.style.color = "#ffb4b4";

        formMessage.style.borderColor = "#6b2929";

        formMessage.style.background = "#170909";

        formMessage.textContent =
            "Please complete all fields.";

        return;

    }


    /*
       GitHub Pages tidak bisa menjalankan PHP.

       Untuk sementara form ini hanya frontend.
       Nantinya bisa disambungkan ke Formspree,
       EmailJS, atau backend sendiri.
    */


    formMessage.style.display = "block";

    formMessage.style.color = "#9ef0bd";

    formMessage.style.borderColor = "#1d6336";

    formMessage.style.background = "#07140c";

    formMessage.textContent =
        "Thank you! Your message form is ready, but email delivery still needs to be connected.";


    contactForm.reset();

});


/* ==================================================
   CURRENT YEAR
================================================== */

const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();


function openExperienceImage(image) {

    const modal = document.getElementById("experienceModal");
    const modalImage = document.getElementById("experienceModalImage");

    modalImage.src = image.src;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeExperienceImage() {

    const modal = document.getElementById("experienceModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* Klik area hitam untuk close */

document.getElementById("experienceModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeExperienceImage();
    }

});


/* Tekan ESC untuk close */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeExperienceImage();
    }

});
