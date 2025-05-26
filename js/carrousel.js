document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los contenedores de carrusel
  const allCarousels = document.querySelectorAll('.carousel-img-container');

  allCarousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-img');

    images.forEach(img => {
      img.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
      });

      img.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
      });
    });
  });
});