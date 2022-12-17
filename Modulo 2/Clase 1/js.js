const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log({h1, p, parrafito, pid, input})
//innerHTML es una mala practica ya que nos deja muy expuesto a ataques, es mejor usar innerText
//innerHTML puede usar etiquetas de html Y EL innerText combierte todo en texto
h1.innerHTML = "El titulo pe <br> Otravez el titulo pe (Pero abajo pe)"

//lo de abajo sirve para ver si tiene un atributo, clase o id
// console.log(h1.getAttribute("pantalla"));
console.log(h1.getAttribute("class"));

//setAttribute sirve para modificar el atributo
h1.setAttribute('class', 'javascrip-papuh')
console.log(h1.getAttribute("class"));

//Agrega otro atributo a la clase, sin borrarla, solamente se añade
h1.classList.add("otro-pe")

//elimina un atributo de la clase
h1.classList.remove('javascrip-papuh')

//Este es para preguntar sobre si hay tal clase, no lo explico
h1.classList.contains("otro-pe")

//cambia lo que esta adentro del valor del input
input.value = "Si se cambio, vas a vivir en canada"

//crea una etiqueta de html
const img = document.createElement('img')
img.setAttribute('src', 'https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')


//SI QUEREMOS QUITAR EL ANTERIOR PARRAFO, USAMOS EL PID (la variable que le dimos el id por medio de getelementById o querySelector), y le añadimos un string vacio con innerHTML
pid.innerHTML = ""

//mete la etiqueta en alguna etiqueta, clase o id, asegurate que lo que quieras añadir este debajo de un innerHTML
pid.append(img);

