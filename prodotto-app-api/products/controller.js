const pool = require("./../db");
const queries = require("./queries");

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (err, response) => {
    if (err) throw err;
    res.send(response.rows);
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (err, response) => {
    if (err) throw err; 
    res.send(response.rows);
  });
};

const addProduct = (req, res) => {
  const { nome, desc, prezzo, sku, qty } = req.body;
    pool.query(
      queries.addProduct,
      [nome, desc, prezzo, sku, qty],
      (err, response) => {
        if (err) {
          throw err;
        }
        res.status(201).send("prodotto inserito")
      }
    );
}; 

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};
