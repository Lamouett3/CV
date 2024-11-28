// Animation du loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".content");

    // Transforme le spinner en boule et masque le loader
    setTimeout(() => {
        loader.style.animation = "ball-transform 1s forwards";
        setTimeout(() => {
            loader.style.display = "none";
            content.classList.remove("hidden");
        }, 1000); // Temps pour cacher complètement le loader
    }, 2000); // Garder le spinner visible pendant 2 secondes
});

// Sélection des sections
const sections = document.querySelectorAll("section");

// Ajout de l'effet Parallax et du ralentissement lors du défilement
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Ajouter la classe "visible" si la section est dans la zone visible
        if (sectionTop < triggerBottom && sectionBottom > 0) {
            section.classList.add("visible");

            // Ajout du ralentissement naturel
            if (sectionTop < window.innerHeight / 2) {
                document.body.style.scrollBehavior = "smooth";
            }
        } else {
            section.classList.remove("visible");
        }
    });
});

// Supprimer le "scroll-smooth" après un certain délai pour éviter les conflits
window.addEventListener("wheel", () => {
    document.body.style.scrollBehavior = "auto";
});