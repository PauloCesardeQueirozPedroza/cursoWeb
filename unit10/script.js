//var frase = "hello world"
//window.alert(5 + 9)

//boleana
var chuva = false
var sol = true

console.log(chuva)
console.log(sol)

//number
var idade = 16
var altura = 1.65

//string

var nome = "appolissauro"

console.log(typeof(chuva))
console.log(typeof(idade))
console.log(typeof(nome))

//var = escopo global, pode ter seu valor alterado, permite criar variaveis vazias

var sobrenome = "Pedroza"
sobrenome = "Queiroz"

var pessoa //null
console.log(pessoa)

//let = escopo local, pode ter seu valor alterado, permite criar variaveis vazias
let aluno = "Sabione"
aluno = "Zé ruela"

//const = escopo local, não é alteravel(variaveis), não pode ser esvaziada(variaveis)
const comida = "feijão preto"
//const bebida

if(true){
   var animal = "Cachorro"
   console.log("dentro do bloco" + animal)
}

//console.log(animal)
document.getElementById("teste").innerHTML = nome;

var comparacao = "0" == 0
console.log(comparacao)

var comparacao2 = "0" === 0
console.log(comparacao2)