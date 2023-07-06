const express = require('express')
const server = express()
const router = require('./router')

//localhost:3000/api/livros
server.use('/api', router)

const PORT = 3000
server.listen(PORT, () => console.log(`Executando na porta ${PORT}`))