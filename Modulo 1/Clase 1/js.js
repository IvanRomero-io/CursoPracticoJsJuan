let nombre = "Ivan"
let apellido = " Romero"
let nombreDeUsuarioPlatzi = "Ivan.io"
let edad = 21
let correoElectronico = "example@gmail.com"
let mayorDeEdad = true
let dineroAhorrado = 6000
let deudas = 1000

let nombreCompleto = nombre + apellido

let dineroReal = dineroAhorrado - deudas

function preguntasBasicas(nombre, apellido, apodo){
let name = nombre;
let lastname = apellido;
let completeName = name + " " + lastname;
let nickname = apodo;

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

const tipoDeSuscripcion = "Basic";


   if(tipoDeSuscripcion == "Free"){
       console.log("Solo puedes tomar los cursos gratis");
    }
    else if(tipoDeSuscripcion == "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if( tipoDeSuscripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else if(tipoDeSuscripcion == "ExpertPlus"){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    
    var i = 0
    var e = 10
   while ( i <= 5) {
      console.log("El valor de i es: " + i);

      i++
  }
  
   while( e >= 2){
      console.log("El valor de e es: " + e);

      e--
  }

  var o = 0;

  while(0 < 1){
   let cuantoEsSuma = parseInt(prompt("Cuanto es 2 + 2?"))
   console.log(cuantoEsSuma)
  }

let colores = ["azul", "amarrillo", "rojo"]

function buscarColores(escala){
   console.log(colores[escala])
}

function mostrarTodosLosColores(array){
   console.log(array.length)
   i = 0
   while(i < array.length){
      console.log(array[i])
      i++
   }
}

let xiaomi = {
   almacenamiento: "164gb",
   pantalla: "Amoled",
   bateria: "4500h",
   ram: "8gb"
}

function especificacionesTecnicas(telefono){
   for(let features in telefono){
      console.log(telefono[features])
   }
}

especificacionesTecnicas(xiaomi)