let pedra = document.getElementById('pedra')
let papel = document.getElementById('papel')
let tesoura = document.getElementById('tesoura')
let container = document.getElementById('container_inferior')
let conteudo = document.getElementById('conteudo_inferior')
let opcao1
let textoOpcao1 = document.createElement('p')
let textoOpcao2 = document.createElement('p')
let opcao2
let conteudoNovo = document.createElement('div')

textoOpcao1.textContent = 'Your Pick'
textoOpcao1.className = 'te'
textoOpcao1.id = 'texto1'
textoOpcao2.textContent = 'House Pick'
textoOpcao2.className = 'te'
textoOpcao2.id = 'texto2'
conteudoNovo.id = 'conteudoNovo'

opcao2 = pedra

pedra.addEventListener('click',()=>{
  opcao1 = pedra
  escolha()
})
papel.addEventListener('click',()=>{
  opcao1 = papel
  escolha()
})
tesoura.addEventListener('click',()=>{
  opcao1 = tesoura
  opcao1.className = 'item opcao1'
  escolha()
})


function escolha(){
  container.removeChild(conteudo)
  conteudoNovo.append(textoOpcao1,textoOpcao2,opcao1,opcao2)
  container.appendChild(conteudoNovo)

}

 