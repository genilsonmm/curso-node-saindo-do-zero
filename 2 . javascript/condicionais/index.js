let idade = 18

if(idade < 17) {
    console.log('Entrou no If')
} else if(idade == 17){
    console.log('Entrou no else if')
} else {
    console.log('Entrou no else')
}

// Switch case
let opcaoCorreta = 'F'

switch (opcaoCorreta){
    case 'A':
        console.log('A opção correta é a letra A')
        break
    case 'B':
        console.log('A opção correta é a letra B')
        break
    case 'C':
        console.log('A opção correta é a letra C')
        break
    case 'D':
        console.log('A opção correta é a letra D')
        break
    case 'E':
        console.log('A opção correta é a letra E')
        break
    default:
        console.log('Nenhuma das oções')
        break
}
