let n = prompt("Escreva um número");
let total = n / 2

function VerificarPar(n) {
    if (n % 2 === 0) {
        console.log("par");
    }

    else {
        console.log("impar");
    }
}
VerificarPar(n);

//divisao

let n1 = prompt("digite o primeiro número");
let n2 = prompt("digite o segundo número");

function calcular(n1, n2) {
    console.log("soma:" + parseInt(n1 + n2));
    console.log("subtracao:" + parseInt(n1 - n2));
    console.log("multiplicacao:" + parseInt(n1 * n2));
    console.log("divisao:" + parseInt(n1 / n2));
    //fazer verificação da divisão por zero
}

calcular();

//divisao

let contador = 10;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

//divisao
function inverterTexto(texto) {
    console.log(texto.split('').reverse().join(''));
}

let texto = "icaro";

inverterTexto(texto);

//divisao

let texto = prompt("Digite uma palavra");

function contarCaracteres(str){
    return str.length
}
console.log(contarCaracteres(texto))

//divisao

let carro = {
    marca: prompt("Digite a marca do carro");
    modelo: prompt("Digite o modelo no carro");
    ano:prompt("Digiteo ano do carro");
    modelcar: function(){
        console.log("O modelo do carro é" + this.modelo)
    }
}
carro.modelcar()

//divisao

let nome = prompt("Digite seu nome");
let mensagem = prompt("Olá");

function mensagemPersonalizada(){
    console.log(mensagem + nome)
}
mensagemPersonalizada()

//divisao
let nota1 = prompt("Digite a primeira nota");
let nota2 = prompt("Digite a sugunda nota");
let nota3 = prompt("Digite a terceira nota");
let media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

function media(){
    console.log("A média desses notas são:" + media)
}
media()

//divisao

