// Función para manejar el efecto de desvanecimiento en scroll
function handleScrollFade() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Agregar la clase fade-in a elementos específicos
document.addEventListener('DOMContentLoaded', () => {
    // Agregar clase fade-in a elementos que queremos animar
    const elementsToAnimate = [
        '.testimonio-card',
        '.caracteristica-card',
        '.contenido-central > div',
        '.btn-naranja',
        '.btn-naranja-outline'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('fade-in');
        });
    });
    
    // Ejecutar la función al cargar y al hacer scroll
    handleScrollFade();
    window.addEventListener('scroll', handleScrollFade);
}); 