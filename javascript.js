// Detectar si el sistema tiene preferencia por modo oscuro al cargar
window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.body.classList.add("dark-mode");
  }

  // Botón para cambiar manualmente el tema
  const toggle = document.getElementById("toggle-theme");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});


/*BLOG */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.blog-card');
  const iframe = document.getElementById('docFrame');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Quitar clase activa anterior y poner la nueva
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Transición suave
      const newSrc = card.getAttribute('data-doc');
      iframe.style.opacity = 0;

      setTimeout(() => {
        iframe.src = ''; // Reinicia el iframe

        setTimeout(() => {
          iframe.src = newSrc;

          // ✅ Aquí restauramos la opacidad cuando el nuevo documento haya cargado
          iframe.onload = () => {
            iframe.style.opacity = 1;
          };
        }, 50);
      }, 200);
    });
  });
});
