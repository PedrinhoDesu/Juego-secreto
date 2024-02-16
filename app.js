let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
alert('Nashe te amo bby, claro que se puede ser programador sin Universidad te falta barrio');
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
    
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();  
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
    //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}   

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled','true');
}

condicionesIniciales();



/*
function mostrarHola(){
    console.log('Hola mundo');
    mostrarHola;
}

function mostrarHolaNombre(nombre) {
    alert(`Hola, ${nombre}`);
    mostrarHolaNombre('Alice');
}

function calcularDoble(numero) {
    return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

function calcularPromedio(a,b,c) {
    return (a + b + c) / 3;
}

let promedio = (4,7,10);
console.log(promedio);

function encontrarMayor(a,b) {
    return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15,9);
g(numeroMayor);

function cuadrado(numero) {
    return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);
*/

/*Ejercicios

function calcularIMC(altura,peso) {
    var imc = peso / (altura*altura);
    return imc
}

function calcularFactorial(numero) {
    if (numero === 0 || numero ===1) {
    } else {
        return numero * calcularFactorial(numero-1);
    }
}

let numero = 5;
let resltado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

*/

let listaGenerica = [];
let lenguajesDeProgramacion = [Javascript, Java, python];
lenguajesDeProgramacion.push('java','ruby','Golang')
function mostrarLenguajesPorSeparado(){
    for (let i = 0; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    } 
}

