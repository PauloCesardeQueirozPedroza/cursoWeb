// Retorna todos os elementos que possuem a classe classname
//document.getElementsByClassName("classname teste")

//Retorna todos os elementos que possuem a classe teste dentro do elemento que possui o ID principal
//document.getElementById("principal").getElementsByClassName("teste")

//Retorna todas as tags(exemplo a tag <h1></h1>) encontradas no documento HTML
//document.getElementsByTagName("h1")

//Retorna todas as tags
//document.getElementsByTagName("*")

//retorna a quantidade de tags
var x = document.getElementsByTagName("h1").length;
console.log(x)

//array/Matriz

var listacompras = ["café", "pão", "manteiga"]

//indice
console.log(listacompras[0])

// JS permite criar listas com dados de tipos diferentes
var dadosdiferentes = ["dia", 25, true]

//tamanho da lista
console.log(dadosdiferentes.length)

//adicionando elementos na lista
listacompras = ["café", "pão", "manteiga"]
listacompras.push("chocolate quente")
console.log(listacompras)

//removendo elementos da lista
listacompras.pop()
console.log(listacompras)

//adicionando elementos em uma possição especifica
listacompras.splice(2, 0, "chocolate quente")
console.log(listacompras)

//remover elementos em uma posição especifica
listacompras.splice(1, 2)
console.log(listacompras)

var compras = ["chocolate", "oreo", "ME DE CHOCOLATE"]

function preencherselect(){
    var htmlfinal = ""
    var tamanholista = compras.length

    for(var i = 0; i < tamanholista; i++){
        htmlfinal += "<option value ="+i+">" + compras[i]+ "</option>"
    }
    document.getElementById("meuselect").innerHTML = htmlfinal
}

function adicionarItem(){
    var  valorInput = document.getElementById("inputItem").value;
    compras.push(valorInput);
    preencherselect();

}

function removerItem(){
        var valorSelect = document.getElementById("meuselect").value;
        compras.splice(valorSelect,  1)
        preencherselect();

}

function soma(){
        var num1 = parseInt(document.getElementById("input1").value);
        var num2 = parseInt(document.getElementById("input2").value);

        document.getElementById("resultado").innerHTML = num1 + num2
}

function sub(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);

    document.getElementById("resultado").innerHTML = num1 - num2
}

function mult(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);

    document.getElementById("resultado").innerHTML = num1 * num2
}


function divi(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);

    document.getElementById("resultado").innerHTML = num1 / num2
}


function criarInputs(){

    var numInputs = parseInt(document.getElementById("numeroInputs").value);
    var htmlfinal = ""

    for(var i = 0; i <numInputs; i++){
        htmlfinal += "<input class'inputMedia'> <br><br>";
    }
            document.getElementById("divInputs").innerHTML = htmlfinal;



}


function calcularMedia() {
    var inputs = document.getElementsByClassName("inputMedia")
    var numeroInputs = inputs.length

    var soma = 0

    for(var i = 0; i < numeroInputs; i++){
        soma += parseInt(inputs { i} .value)
    }
 document.getElementById("mediaFinal").innerHTML = soma / numeroInputs;

}




