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


