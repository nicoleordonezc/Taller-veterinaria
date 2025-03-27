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


/** funcion para buscar */

// function buscador(){
//     let buscar = prompt("Ingrese el nombre de su mascota")
//     let mascota;
//     for (const animal of animales) {
//         mascota = (buscar === animal.nombre) ? animal : "Lo sentimos, pero tu mascota no esta registrada"
        
//     }
//     return mascota
    
// }

// console.log(buscador(animales));

/** funcion para registar */

// function registrar(){

//     let nombre = prompt("Ingrese el nombre de su mascota");
//     let especie = prompt ("Ingrese la especie");
//     let edad = prompt ("Ingrese la edad");
//     let peso = prompt ("Ingrese el peso");
//     let estadoDeSalud = prompt ("Ingrese el estado de salud");

//     let mascotaNueva = {
//         nombre,especie,edad,peso,estadoDeSalud
//     }
//     animales.push(mascotaNueva); 
//     return animales
// }

// console.log(registrar(animales));


/** funcion para listar mascotas */

// function lista(){
//     return animales
// }

// console.log(lista(animales));

/** funcion para actualizar */

// function actualizar(){
//     let buscar = prompt("Ingrese el nombre de su mascota")
//     let mascota;
//     let nuevoES;
//     for (const animal of animales) {
//         mascota = (buscar === animal.nombre) ? nuevoES = prompt("Ingrese el nuevo estado de salud") : "Lo sentimos, pero tu mascota no esta registrada"
//         animal.estadoDeSalud=nuevoES   
     
//         for (const animal of animales) {
//             mascota = (buscar === animal.nombre) ? animal : "Lo sentimos, pero tu mascota no esta registrada"
                
//             }
//         }
//     return mascota
    
// }

// console.log(actualizar(animales));

/** funcion para eliminar */

function eliminar(){
    let buscar = prompt("Ingrese el nombre de la mascota que desea eliminar:");
    animales = animales.filter(animal => animal.nombre !== buscar);
    if (animales.length < 3) {  
      return animales;
    } else {
      return "Lo sentimos, pero tu mascota no está registrada";
    }
    }

    console.log(eliminar(animales));
