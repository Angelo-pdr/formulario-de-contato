const form = document.querySelector("form")
const table = document.querySelector("#thead")
let nome
let telefone
let dadosDoContato ='';

form.addEventListener('submit', function(e){
    e.preventDefault()
    pegarContato()
    criarLinhas()
})

function pegarContato() {
     nome = document.querySelector("#nome").value
     telefone = document.querySelector("#telefone").value
     limparContato()
}

function criarLinhas(){
    const tr = document.createElement('tr')
    tr.innerHTML = `<th>${nome} - ${telefone}</th>`
    table.append(tr)
}

function limparContato(){
   document.querySelector("#nome").value = ''
document.querySelector("#telefone").value = ''
}