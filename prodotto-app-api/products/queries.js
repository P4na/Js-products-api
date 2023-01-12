const getProducts = "SELECT * FROM public.prodotto";

const getProductById = "SELECT * FROM public.prodotto WHERE id = $1";

const addProduct =
  'INSERT INTO public.prodotto (nome, "desc", prezzo, sku, qty) VALUES ($1, $2, $3, $4, $5)';

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};
 