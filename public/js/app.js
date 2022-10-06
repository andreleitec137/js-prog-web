function mostrarNaTela(){
    var mensagem = document.getElementById("mensagemTela").value;
    alert(mensagem);
}

function aula1(){
    var mensagem = "Olá, bem-vindo ao site";
    alert(mensagem);
}

function trocaCorDoTexto(cor, id){
    document.getElementById(id).style.color = cor;
}


function trocaCorDoQuadrado(cor, id){
    document.getElementById(id).style.borderColor  = cor;
}

function gerarTabuada(){
    location.hash = "" ;

    document.getElementById("resultadoTabuada").style.display = 'contents';
    location.hash = "#resultado10" ;

    var valor = document.getElementById("valorTabuada").value;
    const element = document.getElementById("tabuadaDo");
        element.innerHTML = "Tábuada do " + valor;
    for(i = 1; i < 11; i++){
        var resultado = valor * i;
        const element = document.getElementById("resultado" + i);
        element.innerHTML = valor  + " X " + i + " = " + resultado;
    }
}

function trocarFonte(fonte){
    document.getElementById('trocarFonte').style.fontFamily = fonte;
}