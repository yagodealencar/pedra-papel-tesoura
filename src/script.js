let opcao1, opcao2
let pedra = document.getElementById('pedra')
let papel = document.getElementById('papel')
let tesoura = document.getElementById('tesoura')
let triangulo = document.getElementById('triangulo')
let container = document.getElementById('container_inferior')
let conteudo = document.getElementById('conteudo_inferior')
let textoOpcao1 = document.createElement('p')
let textoOpcao2 = document.createElement('p')
let resultado = document.createElement('p')
let conteudoNovo = document.createElement('div')
let esquerda_direita = document.createElement('div')
let esquerda = document.createElement('div')
let centro = document.createElement('div')
let direita = document.createElement('div')
let button = document.createElement('button')
const rules = document.getElementById('rules')
const closePopupButton = document.getElementById('fecharRegras');
const imagePopup = document.getElementById('imagePopup');


rules.addEventListener('click', () => {
  imagePopup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  imagePopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === imagePopup) {
    imagePopup.style.display = 'none';
  }
});


//Clonando elementos para manipulá-los e conservar propriedades originais
let clonepedra = pedra.cloneNode(true)
let clonepapel = papel.cloneNode(true)
let clonetesoura = tesoura.cloneNode(true)
let placar = document.getElementById('num-score')
let contador = 0
let item = document.querySelectorAll('.item')
let icones = document.querySelector('.icones')


textoOpcao1.textContent = 'YOU PICKED'
textoOpcao1.className = 'texto_opcao'
textoOpcao2.textContent = 'THE HOUSE PICKED'
textoOpcao2.className = 'texto_opcao'
conteudoNovo.id = 'conteudoNovo'
resultado.className = 'resultado'
button.id = 'button'
button.textContent = 'PLAY AGAIN'
centro.className = 'centro'
direita.className = 'direita'
esquerda.className = 'esquerda'
esquerda_direita.className = 'esquerda_direita'



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
  icones.append(papel,pedra,tesoura)
  conteudo.append(triangulo,icones)
  container.append(conteudo)
  
})