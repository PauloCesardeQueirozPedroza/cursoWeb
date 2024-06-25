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

function buscarFilmePorPersonagem(){
    var nome = $("#buscaFilmePorNomePersonagem").val();
    $.get("https://swapi.dev/api/people/?search="+nome,popularTabela)
    console.log(data.results[0].name)
    $("#labelFilmeDeId").text(data.results[0].name);
}