//jquerry: biblioteca do JS que permite  simplificar a sintaxe

//JavaScript
//document.getElementById("nomeId");

//JQuerry - Id
//$("#nomeId");

//JavaScript - Class
//document.getElementsByClassName("nomeClasse")
//Jquerry - tag
//$("p")

//seleciona todos os elementos de um HTML
//$("*")
//seleciona o primeiro elemento de <p></p>
//$("p:first")
//seleciona o ultimo elemento de <p></p>
//$("p:last")
//seleciona todos os elementos com o atributo disapled
//$([disabled])

//combinando seleções
//JS
//document.getElementById("nomeId").getElementsByTagName("p")
//Q]
//$("#nomeId p")

//programação orientada a objeto

//var nome = zezinha
//var sobrenome = silva
//var idade = 12
//var pessoa = {nome: "zezinha", sobrenome: "silva", idade: 12}








var pessoa = { 
    nome: "Zezinho", 
    sobrenome: "Silva", 
    idade: 12 
}
console.log(pessoa.nome);
var novaPessoa = {
    nome: "Zezinha", 
    sobrenome: "Silvio", 
    idade: 21,
    andar: function() {
        //  alert( this.nome +" está andando e tem "+ this.idade+ " anos.")
    }
}
novaPessoa.andar();

function People(_nome, _sobrenome, _idade){

this.nome = _nome;
this.sobrenome = _sobrenome;
this.idade = _idade;

var pessoa1 = new People("julia", "amaral", 16);
var pessoa2 = new People("paulo", "cesar", 16);
var pessoa3 = new People("eric", "enzo", 15);
var pessoa4 = new People("dario", "junior", 14);
}



function Item(nome, quantidade, preco){

this.nomeItem = nome;

this.quantidadeItem = quantidade;

this.precoItem = preco;


}
var itens = []
function adicionarItem(){
    var nomeItemNovo = $("#nomeItemId").val();
    var quantidadeNovo = $("#quantidadeId").val();
    var precoNovo = $("#precoId").val();

    var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo);

    itens.push(novoItem);
    console.log(itens);
    atualizaTabela(novoItem);
}

function atualizaTabela(item){
    var htmlFinal = "<tr>";

    htmlFinal += "<td>" + item.nomeItem + "</td>";
    htmlFinal += "<td>" + item.quantidadeItem + "</td>";
    htmlFinal += "<td>" + item.precoItem + "</td>";
    htmlFinal += "</tr>";

    $("#tabelaItens").append(htmlFinal);



}














