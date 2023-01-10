const getStudents = "SELECT * FROM public.prodotto"

const getStudentsById = "SELECT * FROM public.prodotto WHERE id = $1"

const checkProductExists = "SELECT * FROM public.prodotto p WHERE p.nome = $1"

const addStudent = "INSERT INTO public.prodotto (nome, desc, prezzo, sku, qty) VALUES ($1, $2, $3, $4, $5)"
module.exports = {
    getStudents, getStudentsById, checkProductExists, addStudent

}