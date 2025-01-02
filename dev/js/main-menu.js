const toggleMenu = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");

if (toggleMenu) {
  toggleMenu.addEventListener("click", (e) => {
    if (
      e.target.id == "toggle-menu" ||
      e.target.parentElement.id == "toggle-menu"
    ) {
      sidebar.classList.toggle("show");
      toggleMenu.classList.toggle("show");
    }
  });
}

const validarDatos = (adatos) => {
  for (const dato of adatos) {
    if (dato == "") {
      window.alert("Todos los campos deben estar llenos");
      return false;
    }
  }
  return true;
};
