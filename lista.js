const botonAgregar = document.getElementById("boton-agregar-01");
const inputTarea = document.getElementById("input-nombre-tarea");
const inputFecha = document.getElementById("input-fecha-tarea");
const listaTareas = document.getElementById("tareas-por-hacer");

botonAgregar.addEventListener("click", () => {
  const tarea = inputTarea.value;
  if (tarea === "") {
    alert("Debes escribir una tarea");
    return;
  }
  const nuevaTarea = document.createElement("li"); //<li></li>
  const textoTarea = document.createTextNode(tarea); //valor del input
  textoTarea.textContent = tarea + " - " + inputFecha.value + " ";
  nuevaTarea.appendChild(textoTarea); //<li>textoTarea</li>
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Terminar";
  botonBorrar.addEventListener("click", () => {
    nuevaTarea.remove();
  });

  nuevaTarea.appendChild(botonBorrar);
  listaTareas.appendChild(nuevaTarea);
  inputTarea.value = "";
  inputFecha.value = "";
});
