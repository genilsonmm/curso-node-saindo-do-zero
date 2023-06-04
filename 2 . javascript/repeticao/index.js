/*
let i = 0 

while(i < 10){
    console.log('i é igual a ' + i) //i é igual a 1 
    i = i + 1                       //2  
}

console.log('Parau o loop: ' + i)
*/

/*
let i = 10

do{
    console.log('i é igual a ' + i)
}while(i < 10)

console.log('Parau o loop: ' + i)

*/

/*
for(let i = 0; i < 10; i++){
    console.log(i)
}
*/
        //     0   1   2  3  4 
const itens = [20, 28, 3, 8, 0]

for(item in itens){
    console.log(item)
}

for(item of itens){
    console.log(item)
}