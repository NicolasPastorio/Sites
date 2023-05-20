// var frase = jQuery(".frase")

var tempoInicial = $("#tempo-digitacao").text()
// selecionando textarea (jogabilidade)
var campo = $(".campo-digitacao")

// $(document).ready(
$(
    function(){
        atualizaTamanhoFrase()
        inicializaContadores()
        inicializaCronometro()
        inicializaMarcadores()
        $("#botao-reiniciar").click(reiniciaJogo)
    }
)

function atualizaTamanhoFrase(){
    // conteúdo de p.frase
    var frase = $(".frase").text()
    var numPalavras = frase.split(" ").length
    // conteúdo de span#tamanho-frase
    var tamanhoFrase = $("#tamanho-frase")
    tamanhoFrase.text(numPalavras)
}

function inicializaContadores(){
    campo.on("input", function(){
        var conteudo = campo.val()

        var qtdPalavras = conteudo.split(/\S+/).length - 1
        $("#contador-palavras").text(qtdPalavras)

        var conteudoSemEspaco = conteudo.replace(/\s+/g, '')

        var qtdCaracteres = conteudoSemEspaco.length
        $("#contador-caracteres").text(qtdCaracteres)
    })
}

//game over
function inicializaCronometro(){
    var tempoRestante = $("#tempo-digitacao").text()
    campo.one("focus", function(){
        // desabilitar botão de reiniciar
        $("#botao-reiniciar").attr("disabled", true)
        var cronometroID = setInterval(function(){
            tempoRestante--

            $("#tempo-digitacao").text(tempoRestante)

            if(tempoRestante < 1){
                clearInterval(cronometroID)
                // habilitar botão de reiniciar
                finalizaJogo()
            }
        }, 1000)
    })
}

function finalizaJogo(){
    campo.attr("disabled", true)
    campo.toggleClass("campo-desativado")
    $("#botao-reiniciar").attr("disabled", false)
    inserePlacar()
}

function inicializaMarcadores(){
  //compara texto digitado
  var frase = $(".frase").text()

  campo.on("input", function(){
    var digitado = campo.val()
    var comparavel = frase.substr(0, digitado.length)

    if(digitado == comparavel){
      campo.removeClass("borda-vermelha")
      campo.addClass("borda-verde")
    }else{
      campo.removeClass("borda-verde")
      campo.addClass("borda-vermelha")
    }

    // var ehCorreto = (digitado == comparavel)
    // campo.toggleClass("borda-verde", ehCorreto)
    // campo.toggleClass("borda-vermelha", !ehCorreto)
  })
}

//reiniciar
function reiniciaJogo(){
    // console.log("Botão clicado")
    campo.attr("disabled", false)
    campo.val("")
    $("#contador-palavras").text("0")
    $("#contador-caracteres").text("0")
    $("#tempo-digitacao").text(tempoInicial)
    inicializaCronometro()
    campo.toggleClass("campo-desativado")
    campo.removeClass("borda-verde")
    campo.removeClass("borda-vermelha")
}
