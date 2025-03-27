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

function buscador(){
    let buscar = prompt("Ingrese el nombre de su mascota")
    let mascota;
    for (const animal of animales) {
        mascota = (buscar === animal.nombre) ? animal : "Lo sentimos, pero tu mascota no esta registrada"
        
    }
    return mascota
    
}