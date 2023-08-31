let container = document.getElementById('container_inferior')
let conteudo = document.getElementById('conteudo_inferior')
let opcao1
let textoOpcao1 = document.createElement('p')
let textoOpcao2 = document.createElement('p')
let opcao2
let conteudoNovo = document.createElement('div')
let resultado = document.createElement('p')
let button = document.createElement('button')
let esquerda = document.createElement('div')
let centro = document.createElement('div')
let direita = document.createElement('div')
let pedra = document.getElementById('pedra')
let papel = document.getElementById('papel')
let tesoura = document.getElementById('tesoura')
let triangulo = document.getElementById('triangulo')
//Clonando elementos para manipulá-los e conservar propriedades originais
let clonepedra = pedra.cloneNode(true)
let clonepapel = papel.cloneNode(true)
let clonetesoura = tesoura.cloneNode(true)
let placar = document.getElementById('num-score')
let contador = 0
let idopcao1
let idopcao2
let item = document.querySelectorAll('.item')
textoOpcao1.textContent = 'YOU PICK'
textoOpcao1.className = 'texto_opcao'
textoOpcao2.textContent = 'HOUSE PICK'
textoOpcao2.className = 'texto_opcao'
conteudoNovo.id = 'conteudoNovo'
resultado.className = 'resultado'
button.id = 'button'
button.textContent = 'PLAY AGAIN'
centro.className = 'centro'
direita.className = 'direita'
esquerda.className = 'esquerda'




  function sorteio(){
    let num = Math.floor(Math.random()*(4-1)+1)
    if(num === 1){
      opcao2 = clonepedra
    }
    else if(num === 2){
      opcao2 = clonepapel
    }
    else opcao2 = clonetesoura

  }

function check(){
  if(opcao1.id == opcao2.id){
    resultado.textContent = 'DRAWN'
  }
  else if((opcao1.id == 'pedra' && opcao2.id == 'tesoura')||(opcao1.id == 'tesoura' && opcao2.id == 'papel')||
  (opcao1.id == 'papel' && opcao2.id == 'pedra')){
    resultado.textContent = 'YOU WIN'
    contador++
    placar.innerText = contador
  }
  else resultado.textContent = 'YOU LOSE'
}

item.forEach((elemento)=>{
  elemento.addEventListener('click',()=>{
    opcao1 = elemento
    escolha()
    check()
  })
})


function escolha(){
  sorteio()
  container.removeChild(conteudo)
  esquerda.append(textoOpcao1,opcao1)
  centro.append(resultado,button)
  direita.append(textoOpcao2,opcao2)
  conteudoNovo.append(esquerda,centro,direita)
  container.appendChild(conteudoNovo)
}

 button.addEventListener('click',()=>{
  resultado.textContent = ''
  esquerda.innerHTML = ''
  centro.innerHTML = ''
  direita.innerHTML = ''
  container.innerHTML = ''
  conteudo.innerHTML = ''
  conteudo.append(triangulo,papel,pedra,tesoura)
  container.append(conteudo)
  
})