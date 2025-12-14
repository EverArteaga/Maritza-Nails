// Navegación suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar el efecto a todas las secciones
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Efecto hover mejorado para las tarjetas de servicio
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});

// Cargar imagen de la dueña
document.getElementById('photoUpload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const img = document.getElementById('ownerPhoto');
            const text = document.getElementById('photoText');

            img.src = event.target.result;
            img.style.display = 'block';
            text.style.display = 'none';
        };

        reader.readAsDataURL(file);
    } else {
        alert('Por favor selecciona un archivo de imagen válido');
    }
});

// Log de bienvenida en consola
console.log('✨ Bienvenido a Maritza Nails ✨');
console.log('Página web cargada correctamente');
