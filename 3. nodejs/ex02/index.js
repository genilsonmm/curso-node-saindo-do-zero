const lodash = require('lodash')

const alunos = [
    {
        nome: 'João',
        nota: 7.6
    },
    {
        nome: 'Maria',
        nota: 8.6
    },
    {
        nome: 'Pedro',
        nota: 8.1
    }
]

const media = lodash.sumBy(alunos, 'nota') / alunos.length

console.log('Média', media) 