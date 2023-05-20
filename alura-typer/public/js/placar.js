//resultado
function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody")
    var usuario = "Nícolas"
    var numPalavras = $("#contador-palavras").text()

    // var linha = `<tr><td>${usuario}</td><td>${numPalavras}</td>
    //     <td><a href="#" class="botao-remover"><i class="small material-icons">delete</i></a></td>
    //   </tr>`
    var linha = novaLinha(usuario, numPalavras)
    linha.find(".botao-remover").click(removeLinha)

    corpoTabela.append(linha)
}

function novaLinha(usuario, palavras){
  var linha = $("<tr>")
  var colunaUsuario = $("<td>").text(usuario)
  var colunaPalavras = $("<td>").text(palavras)

  var colunaRemover = $("<td>")
  var link = $("<a>").addClass("botao-remover").attr("href", "#")
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete")

  link.append(icone)
  colunaRemover.append(link)

  linha.append(colunaUsuario)
  linha.append(colunaPalavras)
  linha.append(colunaRemover)

  return linha
}

//botão remover
function removeLinha(){
    event.preventDefault()
    $(this).parent().parent().remove()
}
