require('dotenv').config()

const express = require('express')
const server = express()

server.use(express.json())

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log(`Executando na porta ${PORT}`))

module.exports = server