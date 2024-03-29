const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "simplecrud",
});

app.post("/create", (req, res) => {
  const product = req.body.product;
  const price = req.body.price;

  db.query(
    "INSERT INTO cruddatas (produto, valor) VALUES (?,?)",
    [product, price],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send("Valores Inseridos");
      }
    }
  );
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM cruddatas", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/products/valor", (req, res) => {
  db.query(`SELECT * FROM cruddatas ORDER BY valor`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/products/id", (req, res) => {
  db.query(`SELECT * FROM cruddatas ORDER BY id`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/products/produto", (req, res) => {
  db.query(`SELECT * FROM cruddatas ORDER BY produto`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/products", (req, res) => {
  const id = req.body.id;
  const product = req.body.product;
  const price = req.body.price;

  db.query(
    "UPDATE cruddatas SET produto = ?, valor = ? WHERE id = ?",
    [product, price, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM cruddatas WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server Executando");
});
