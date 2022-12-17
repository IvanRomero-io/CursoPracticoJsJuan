const h1 = document.querySelector('h1')
const input1 = document.querySelector('#barra-uno')
const input2 = document.querySelector('#barra-dos')
const btn = document.getElementById('btnCalcular')
const pidResultado = document.getElementById('result')
let resultado;


function btnOnClick(){
    console.log('click del btn')
    console.log( parseInt(input1.value)  + parseInt(input2.value))
    resultado = parseInt(input1.value)  + parseInt(input2.value)
    pidResultado.innerHTML = "El resultado de la suma es " + resultado
}




