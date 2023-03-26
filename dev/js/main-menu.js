const toggleMenu = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");

const opciones = document.querySelectorAll(".opcion");

if (toggleMenu) {
  toggleMenu.addEventListener("click", (e) => {
    if (
      e.target.id == "toggle-menu" ||
      e.target.parentElement.id == "toggle-menu"
    ) {
      sidebar.classList.toggle("show");
      toggleMenu.classList.toggle("show");
      opciones.forEach((icon) => {
        icon.removeChild(icon.children[1]);
      });
    }
  });
}
