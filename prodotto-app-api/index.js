const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const productRoutes = require('./products/routes') 
const cors = require('cors')


app.use(cors({
  origin:"http://localhost:3000"
}))

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use('/api/products', productRoutes)

app.listen(5000, () => console.log("server connected"));
