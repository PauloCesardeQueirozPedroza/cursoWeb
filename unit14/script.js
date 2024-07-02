//API - Application Programing Interface

//REST - Represetational State Trasnfer
//Recursos
//Manipulações
//GET acessar
//POST criar
//PUT atualizar
//DELETE apagar
//status resposta

//100 informações gerais
//200 sucesso
//300 redirecionamento
//400 erro no cliente
//500 erro no servidor

//AJAX - recurso que permite enviar requisições

//EX:
// $.get(URL, funcao_callback)
//$.post(URL, data, funcao_callback)

$("#BotaoBuscarPersonagem").click(BuscarPersonagemAleatorio);

function BuscarPersonagemAleatorio(){
    $.get("https://swapi.dev/api/people/" + Math.floor(Math.random()* 9) + 1,PreencherLabelPersonagem);

}


function PreencherLabelPersonagem(data){
    console.log(data.name);

    $("#PersonagemAleatorioId").text(data.name);
}


$("#botaoBuscarFilmeId").click(buscarFilmePorPersonagem);

function buscarFilmePorPersonagem(){
    var nome = $("#buscarFilmePorNomePersonagem").val();
    $.get("https://swapi.dev/api/people/?search="+nome,popularTabela)
    $("#labelFilmeDeId").text(data.results[0].name);
}


function popularTabela(data){
    console.log(data.results[0].name);
    $("#labelFilmeId").text(data.results[0].name);

    $("#tabelaFilmesId").find("tr:gt(0)").remove();
    for(var i = 0; i < data.results[0].films.length; i++){
        $.get(data.results[0].films[i], criarLinha);
    }

}


function criarLinha(data){
    var htmlFinal =
    "<tr><td>" + data.title + "</td>"+
    "<td>" + data.episode_id + "</td>"+
    "<td>" + data.director + "</td></tr>";

    $("#tabelaFilmeID").append(htmlFinal)
}