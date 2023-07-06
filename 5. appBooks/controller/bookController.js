const { v4: uuidv4 } = require('uuid')
let database = require('../data/database')
const urlBase = '/books'

module.exports = (router) => {

    //localhost:8080/api/books
    router.get(urlBase, (req, res)=> {
        res.json(database)
    })

    //localhost:8080/api/1
    router.get(urlBase + '/:id', (req, res)=>{
        
        const { id } = req.params
        
        const book = database.find(item => item.id == id)

        if(book == undefined){
            res.status(204) //No Content
        }
        
        res.json(book)
    })

    //localhost:8080/api/books
    router.post(urlBase, (req, res)=>{

        const newBook = {
            id: uuidv4(),
            title: req.body.title,
            pages: req.body.pages
        }

        database.push(newBook)
        res.status(201).json(newBook)
    })

    //localhost:8080/api/books
    router.put(urlBase, (req, res)=>{
        const id = req.body.id
        const book = database.find(item => item.id == id)

        book.title = req.body.title
        book.pages = req.body.pages

        res.json(book)
    })

    router.delete(urlBase + '/:id', (req, res)=>{
        const {id} = req.params

        const newList = database.filter(item => item.id != id)
        database = newList

        res.status(200).send()
    })
}