const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//we need middleware
app.use(cors())
app.use(express.json())//we need this parser to chop up json form client to server
  //we need for working between apps






  pool.query(`
  CREATE TABLE crypto(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      price INTEGER,
      amount INTEGER,
      sector VARCHAR(255),
      thmnth BOOLEAN DEFAULT FALSE,
      smonth BOOLEAN DEFAULT FALSE,
      trade  BOOLEAN DEFAULT FALSE
  );
  `)

const fetch = require('node-fetch');

const url = "postgresql://crypto_olfk_user:HB8fdNb29gXBU1Rqi6NzDUEzFBCgxjdc@dpg-cfvuvcqk728pn7u71dlg-a:5432/crypto_olfk";


fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));




//put info in base 
app.post("/", async (req, res) => {
    try {

        res.header('Access-Control-Allow-Origin', 'https://criptoe.netlify.app');
  
        const { name, price, amount, description, sector } = req.body
        const forBase = await pool.query(
            "INSERT INTO crypto(id,name,price,amount,description,sector) VALUES(nextval('crypto_id_seq'),$1,$2,$3,$4,$5) RETURNING *",
            [name, price, amount, description, sector]
        )
        res.json(forBase.rows)
    } catch (error) {
        console.log(error)
    }
});

//this is the route when a get requestr get made
app.get("/", async (req, res) => {
    try {
        const allinfo = await pool.query(
            "SELECT * FROM crypto"
        )
        res.json(allinfo.rows)
    } catch (error) {
        console.log(error)
    }

})


//deleting all the data
app.delete("/crypto", async (req, res) => {
    try {

        const deleterow = await pool.query(
            "DELETE FROM crypto;"
        )
        res.json("we deleted")
    } catch (error) {
        console.log(error)
    }
})

//deleting one
app.delete("/crypto/:id", async (req, res) => {
    try {
        const { id } = req.params; //the params gets from thr irl // we need the : above so it not string literal
        const deleterow = await pool.query(
            "DELETE FROM crypto WHERE id = $1",

            [id] // this connects with the query
        );
        res.json("item deleted")
    } catch (error) {
        console.log(error)
    }
});


app.listen(5000, () => {
    console.log("ayee")
})
