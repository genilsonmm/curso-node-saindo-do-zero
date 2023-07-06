const http = require('http')

const server = http.createServer(function(request, response){

    console.log('Acessou!')
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end('<h1>Melhor usar o Express! ação, referência </h1>')

})

server.listen(8081, function(){
    console.log('Escutando na porta 8081')
})