//pegando toda as subtrações e somas através da
//classe controle-ajuste
const controle = document.querySelectorAll('[data-controle]')
//p.estatistica-numero
const estatisticas = document.querySelectorAll('[data-estatistica]')
console.log(estatisticas)
//objeto
const pecas = {
  "bracos":{
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },
  "blindagem":{
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "valocidade": -20
  },
  "nucleos":{
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "valocidade": -24
  },
  "pernas":{
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes":{
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
};

controle.forEach( (elemento) =>{
  elemento.addEventListener('click', (evento) =>{
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatisticas(evento.target.dataset.peca)
  })
})

// Lógica de manipulação dos dados
function manipulaDados(operacao, controle){
  const peca = controle.querySelector('[data-contador]')

  if(operacao === '-'){
    peca.value = parseInt(peca.value) - 1
  }else{
    peca.value = parseInt(peca.value) + 1
  }
}

//função para atualizar as estatisticas
function atualizaEstatisticas(peca){

  estatisticas.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}
