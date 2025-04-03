let animales = [
    
    {nombre: "loro",
    especie: "perro",
    edad: "5 años",
    peso: "5kg",
    estadoDeSalud: "enfermo",},

    {nombre: "copito",
    especie: "gato",
    edad: "2 años",
    peso: "kg",
    estadoDeSalud: "sano",},

    {nombre: "kira",
    especie: "gato",
    edad: "3 años",
    peso: "2kg",
    estadoDeSalud: "enfermo",},
]

function salir() {
  alert("👋 ¡Gracias por usar el sistema de registro de mascotas!");
}

// Menú de opciones
function menu() {
  let opcion;
  do {
      opcion = prompt(`Seleccione una opción:
      1. Registrar una nueva mascota
      2. Listar todas las mascotas registradas
      3. Buscar una mascota por nombre
      4. Actualizar el estado de salud de una mascota
      5. Eliminar una mascota por nombre
      6. Salir`).trim();

      switch (opcion) {
          case "1":
              registrar(menu);
              return; // Evita que el menú se muestre antes de completar el registro
          case "2":
              lista();
              break;
          case "3":
              buscador();
              break;
          case "4":
              actualizar();
              break;
          case "5":
              eliminar();
              break;
          case "6":
              salir();
              return;
          default:
              alert("❌ Opción no válida. Intente de nuevo.");
      }
  } while (opcion !== "6");
}

// Iniciar el programa
menu();

/** funcion para buscar */

function buscador(){
    let buscar = prompt("Ingrese el nombre de su mascota")
    let mascota;
    for (const animal of animales) {
        mascota = (buscar === animal.nombre) ? animal : "Lo sentimos, pero tu mascota no esta registrada"
        
    }
    alert(`${JSON.stringify(mascota)}`) 
    
}

/** funcion para registar */

function registrar(){

    let nombre = prompt("Ingrese el nombre de su mascota");
    let especie = prompt ("Ingrese la especie");
    let edad = prompt ("Ingrese la edad");
    let peso = prompt ("Ingrese el peso");
    let estadoDeSalud = prompt ("Ingrese el estado de salud");

    let mascotaNueva = {
        nombre,especie,edad,peso,estadoDeSalud
    }
    animales.push(mascotaNueva); 
    alert(`${JSON.stringify(mascotaNueva)}`) 
}


/** funcion para listar mascotas */

function lista(){
  alert(`${JSON.stringify(animales)}`) 
}


/** funcion para actualizar */

function actualizar(){
    let buscar = prompt("Ingrese el nombre de su mascota")
    let mascota;
    let nuevoES;
    for (const animal of animales) {
        mascota = (buscar === animal.nombre) ? nuevoES = prompt("Ingrese el nuevo estado de salud") : "Lo sentimos, pero tu mascota no esta registrada"
        animal.estadoDeSalud=nuevoES   
     
        for (const animal of animales) {
            mascota = (buscar === animal.nombre) ? animal : "Lo sentimos, pero tu mascota no esta registrada"
                
            }
        }
        alert(`${JSON.stringify(mascota)}`) 
    
}


/** funcion para eliminar */

function eliminar(){
    let buscar = prompt("Ingrese el nombre de la mascota que desea eliminar:");
    animales = animales.filter(animal => animal.nombre !== buscar);
    if (animales.length < 3) {  
      alert(`${JSON.stringify(animales)}`);
    } else {
      return "Lo sentimos, pero tu mascota no está registrada";
    }
    }
