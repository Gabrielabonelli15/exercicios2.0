let n = prompt("Escreva um número")
 let total = n/2
 
 function VerificarPar(n) {
 if(n % 2 === 0){
     console.log("par")
 }
 
 else{
     console.log("impar")
 }
 }
 VerificarPar(n)

 //divisao

 function calcular(n1, n2) {
    return {
        soma: parseInt(n1 + n2),
        subtracao: parseInt(n1 - n2),
        multiplicacao: parseInt(n1 * n2),
        divisao: parseInt(n1 / n2). 
    };
}
