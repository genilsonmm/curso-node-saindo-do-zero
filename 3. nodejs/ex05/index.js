const express = require('express')
const server = express()

//localhost:3000/
server.get('/', function(request, response){
    response.send('<h1>Olá express</h1>')
})

const PORT = 3000
server.listen(PORT, () => { console.log('Executando o server na porta ' + PORT) })