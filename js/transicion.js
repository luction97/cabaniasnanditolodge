window.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-load');

  animatedElements.forEach(el => {
    // Si es una imagen, esperamos que cargue
    if (el.tagName === 'IMG') {
      if (el.complete) {
        startAnimation(el);
      } else {
        el.onload = () => startAnimation(el);
      }
    } else {
      // Para otros elementos (no imágenes), simplemente hacemos el retardo mínimo
      setTimeout(() => {
        startAnimation(el);
      }, 50);
    }
  });

  function startAnimation(el) {
    el.classList.remove('invisible-on-load');
    el.classList.add('animate-on-load-start');
  }
});
