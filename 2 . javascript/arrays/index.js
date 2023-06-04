const alunos = [
    {
        nome: 'Maria da Silva',
        idade: 20,
        nota: 8.4
    },
    {
        nome: 'João Martins',
        idade: 20,
        nota: 9.1
    },
    {
        nome: 'Daniel Ferreira',
        idade: 20,
        nota: 5.8
    },
    {
        nome: 'Genilson',
        idade: 10,
        nota: 4.2
    }
]

const alunosReprovados = alunos.filter(item => item.nota < 7)
console.log(alunosReprovados)

const alunoEncontrado = alunos.find(item => item.nome == 'Genil')
console.log('Aluno encontrado: ', alunoEncontrado)

/*
const novoAluno = {
    nome: 'Fabricio',
    idade: 45,
    nota: 10.0
}

alunos.push(novoAluno)

let soma = 0

for(item of alunos){
    soma = soma + item.nota
}

const media = soma / alunos.length
console.log('Média: ', media.toFixed(1))
console.log(alunos)

alunos.pop()

console.log(alunos)
*/
