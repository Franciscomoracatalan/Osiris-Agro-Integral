// =====================================================
// OSIRIS AGRO INTEGRAL - JAVASCRIPT
// =====================================================


// =====================================================
// MENÚ MOBILE
// =====================================================

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (navbar.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


// =====================================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// =====================================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (!navbar || !menuButton) return;

        navbar.classList.remove("active");

        const icon = menuButton.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


// =====================================================
// FAQ
// =====================================================

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");


    if (!question) return;


    question.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        // Cerrar todas las preguntas

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const answer =
                otherItem.querySelector(".faq-answer");

            if (answer) {

                answer.style.maxHeight = null;

            }

        });


        // Abrir la seleccionada

        if (!isActive) {

            item.classList.add("active");

            const answer =
                item.querySelector(".faq-answer");

            if (answer) {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        }

    });

});


// =====================================================
// AÑO AUTOMÁTICO
// =====================================================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


// =====================================================
// WHATSAPP
// =====================================================

const whatsappNumbers = {

    principal: "56964424360",

    secundario: "56938867660",

    tercero: "56958476291"

};


// =====================================================
// FORMULARIO DE CONTACTO
// =====================================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    ?.value
                    .trim();


            const service =
                document
                    .getElementById("service")
                    ?.value;


            const message =
                document
                    .getElementById("message")
                    ?.value
                    .trim();


            // Validación

            if (!name || !service || !message) {

                alert(
                    "Por favor completa todos los campos."
                );

                return;

            }


            // Mensaje para WhatsApp

            const whatsappMessage =

                `Hola OSIRIS Agro Integral 🌿

Nombre: ${name}

Servicio:
${service}

Mensaje:
${message}

Me gustaría recibir más información.`;


            const url =

                `https://wa.me/${whatsappNumbers.principal}?text=${encodeURIComponent(
                    whatsappMessage
                )}`;


            // Abrir WhatsApp

            window.open(
                url,
                "_blank"
            );


        }
    );

}


// =====================================================
// ANIMACIONES AL HACER SCROLL
// =====================================================

const animatedElements =
    document.querySelectorAll(
        ".service-card, .project-card, .gallery-card, .process-step, .about-content, .about-image"
    );


if ("IntersectionObserver" in window) {


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });

}


// =====================================================
// GALERÍA / LIGHTBOX
// =====================================================

const lightbox =
    document.getElementById("lightbox");


const lightboxImage =
    document.getElementById("lightboxImage");


const lightboxTitle =
    document.getElementById("lightboxTitle");


const lightboxClose =
    document.getElementById("lightboxClose");


const galleryButtons =
    document.querySelectorAll(".gallery-open");


// Abrir imagen

galleryButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (!lightbox ||
            !lightboxImage ||
            !lightboxTitle) return;


        const image =
            button.getAttribute("data-image");


        const title =
            button.getAttribute("data-title");


        lightboxImage.src =
            image;


        lightboxImage.alt =
            title;


        lightboxTitle.textContent =
            title;


        lightbox.classList.add("active");


        document.body.style.overflow =
            "hidden";

    });

});


// =====================================================
// CERRAR LIGHTBOX
// =====================================================

function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightbox) {

    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


// =====================================================
// CERRAR LIGHTBOX CON ESC
// =====================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            lightbox &&
            lightbox.classList.contains("active")
        ) {

            closeLightbox();

        }

    }
);


// =====================================================
// VIDEO DE FONDO
// =====================================================

const heroVideo =
    document.querySelector(".hero-video");


if (heroVideo) {

    heroVideo.muted = true;

    heroVideo.playsInline = true;


    const playVideo =
        heroVideo.play();


    if (playVideo !== undefined) {

        playVideo.catch(() => {

            console.log(
                "El navegador requiere interacción para reproducir el video."
            );

        });

    }

}


// =====================================================
// FIN
// =====================================================