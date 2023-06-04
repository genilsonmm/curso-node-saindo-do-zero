/* Number */
let idade = 10

console.log('Idade (número):', idade)

// String
let nome = 'Genilson'
console.log('Nome (texto):', nome)

//Boolean
let eVerdadeiro = false
console.log('É verdadeiro? ', eVerdadeiro)

//Array
let numeros = [10, 90, 67, 19]
let nomes = ['Genilson', 'Daniel', 'Maria']

console.log('Array números: ', numeros)
console.log('Array strings', nomes)

//Null e undefined
let endereco = null
console.log('Tipo Null: ', endereco)

let cep
console.log('Tipo undefined', cep)

//Object
let pessoa = {
    idade: 89,
    nome: 'Fulano da Silva',
    contatos: ['86776676565', 'fulano@gmail.com', '@fulano']
}

console.log('Object:', pessoa)

//Functions
let acao = function(){
    let nome = 'Fulano da Silva'
    
    console.log('Chamado dentro da function', nome)
}

acao()

function acao2 (){
    console.log('Chamado na função ação2')
}

acao2()





