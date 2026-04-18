const btnSubir = document.getElementById("btnSubir");
const navLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section");

// 1. CONTROL DE SCROLL
window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    // Botón subir
    if (scrollPos > 600) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }

    // Menú Activo Dinámico
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPos >= sectionTop - 160) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("activo");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("activo");
        }
    });
});

// 2. CLICK PARA SUBIR
btnSubir.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 3. SCROLL SUAVE PARA LINKS (Ajustado para el header alto)
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});