const pool = require('./../db')
const queries = require('./queries')


const getStudents = (req, res) => {
    pool.query(queries.getStudents, (err, response)=>{
        if (err) throw err
        res.send(response.rows)
    })
}

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentsById, [id] , (err, response)=>{
        if (err) throw err
        res.send(response.rows) 
    })
}

const addStudent = (req, res) => {
    const { nome, desc, prezzo, sku, qty } = req.body
    pool.query(queries.checkProductExists, [nome], (err, response)=>{
        //if(response.rows.length != undefined) {res.send("Product already exists")}
        
        pool.query(queries.addStudent, [nome, desc, prezzo, sku, qty], (err, response)=>{
            if(err) {throw err}
            res.send(response.rows)
        })
    })
}

module.exports = {
    getStudents, getStudentsById, addStudent
}