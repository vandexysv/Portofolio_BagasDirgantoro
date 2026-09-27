// =============================
// MOBILE NAVBAR
// =============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// Close navbar after clicking menu
document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


// =============================
// ACTIVE NAVBAR ON SCROLL
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// =============================
// CONTACT FORM
// =============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;

    console.log({
        name,
        email,
        message
    });

    alert(
        "Thank you! Your message has been received."
    );

    contactForm.reset();

});