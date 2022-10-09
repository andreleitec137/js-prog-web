function mostrarNaTela(){
    var mensagem = document.getElementById("mensagemTela").value;
    alert(mensagem);
}

function mostrarMensagem(){
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

function gerarFatorial(numeroOrigem){

    const fatorial = (numero) => {
        if (numero < 0) return false;
        return numero === 0 ? 1 : numero * fatorial(numero - 1);
    };

    let resultadoFinal = fatorial(numeroOrigem);

    const element = document.getElementById("resultadoFatorial");
    element.innerHTML = "Fatorial de " + numeroOrigem + " = " + resultadoFinal;
}


function gerarFatorialDinamico(){

    var numeroOrigem = document.getElementById("fatoriallDinamico").value;

    if(numeroOrigem == "") numeroOrigem = 0;
    
    const fatorial = (numero) => {
        if (numero < 0) return false;
        return numero === 0 ? 1 : numero * fatorial(numero - 1);
    };

    let resultadoFinal = fatorial(numeroOrigem);

    const element = document.getElementById("resultadoFatorialDinamico");
    element.innerHTML = "Fatorial de " + numeroOrigem + " = " + resultadoFinal;
}
