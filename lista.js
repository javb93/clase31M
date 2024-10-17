const botonAgregar = document.getElementById("boton-agregar-01");
const inputTarea = document.getElementById("input-nombre-tarea");
const inputFecha = document.getElementById("input-fecha-tarea");
const listaTareas = document.getElementById("tareas-por-hacer");

botonAgregar.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});
