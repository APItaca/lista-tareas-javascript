//obtenemos el valor
function agregarTarea(){
    let nuevaTareatexto=document.getElementById("nuevaTarea").value;
    //si es estrictamente vacio crea una alerta
    if(nuevaTareatexto===""){
        alert("Ingrese un valor no vacío.");
        return;
    }
    //crear elemento en lista
    let nuevaTarea=document.createElement("li");
    nuevaTarea.textContent=nuevaTareatexto + " ";

    //crear boton eliminar
    let botoneliminar=document.createElement("button");
    botoneliminar.textContent="Eliminar";
    botoneliminar.onclick = function (){ nuevaTarea.remove();}

    //agregar boton eliminar al elemento de la lista
    nuevaTarea.appendChild(botoneliminar);

    //agregar tarea a la lista
    document.getElementById("lista tareas").appendChild(nuevaTarea);
    //limpiar
    document.getElementById("nuevaTarea").value ="";
}