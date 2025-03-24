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

let texto = prompt("Digite uma palavra");

function inverterTexto(texto) {
    console.log(texto.split('').reverse().join(''));
}

inverterTexto(texto);

//divisao

let texto2 = prompt("Digite uma palavra");

function contarCaracteres(str){
    return str.length;
}
console.log(contarCaracteres(texto2));

//divisao

let carro = {
    marca: prompt("Digite a marca do carro"), 
    modelo: prompt("Digite o modelo no carro"),
    ano:prompt("Digiteo ano do carro"),
    modelcar: function(){
        console.log("O modelo do carro é" + this.modelo);
    }
}
carro.modelcar()

//divisao

let nome = prompt("Digite seu nome");
let mensagem = prompt("Olá");

function mensagemPersonalizada(){
    console.log(mensagem + nome);
}
mensagemPersonalizada();

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

let contador2 = 1;

while (contador2 >= 20) {
    console.log(contador2);
    contador2--;

    if (x%3 ==0) {
        console.log("É multiplo de 3")
    }

    else{
        console.log("Não é multiplo de 3")
    }
}
 
//divisao

let palavra = ("Digite uma palavra");

verificarPalindromo(palavra);


function verificarPalindromo(x){
    y = x.split('').reverse().join('');
    if (y=x){
    console.log("É um palíndromo");
    }
    else{
        console.log("Não é um palíndrmo")
    }
}

//divisao 

let nu1 = prompt("Digite um número")

function verificarSinal(){
    if (nu1>0){
        console.log("É positivo")
    }
    else if (nu1==0){
        console.log("É zero")
    }
    else{
        console.log("É negativo")
    }
}
verificarSinal()

//divisao
let temp = prompt("Digite a temperatura")
function converterTemperatura(){
    console.log((x*9/5)+parseInt(32));
};
converterTemperatura()

//divisao

let soma = 0; 

while (let contador3  >= 100){ 
soma += parseInt(contador3); contador3= 100; 
}; 
 contador3++; 
console.log(soma);

//divisao

function substituirPalavra(str){
	str.replace(‘azul’, ‘vermelho’);
};
substituirPalavra()

//divisao

let str = prompt(“Digite uma palavra”);

function verificarTamanho(str){
	console.log(“A palavra tem” + str.lenght + “caracteres”)
}

//divisao


let frutas = [“banana”, “morango”, “tangerina”, “melancia”,”roma” ];
console.log(frutas[2]);

//divisao

let nome = prompt(“Escreva seu nome”);
let mensagem = prompt("Bem vindo(a)");

function saudacao(){
	console.log(nome + mensagem);
}

//divisao

let nota1 = (“Digite a primeira nota”);

function verificarAprovacao(){
	if (nota>= 6) {
	console.log(“Aprovado”)
	}
	else{
	console.log(“Reprovado”)
	}
}

//divisao

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//divisao

function contarVogais(palavra) {
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    return contador;
}

//divisao

function somarArray(array) {
    return array.reduce((acumulador, valor) => acumulador + valor, 0);
}

//divisao

function dobrarNumero(numero) {
    return numero * 2;
}

//divisao

let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

//divisao

function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//divisao

function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
