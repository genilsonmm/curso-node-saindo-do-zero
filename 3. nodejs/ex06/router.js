const express = require('express')
const router = express.Router()

const database = require('./dados/database')

router.get('/livro', (req, res) => {
    res.json(database)
})

module.exports = router