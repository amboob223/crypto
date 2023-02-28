const POOL = require("pg").Pool;
const pool = new POOL({
    connectionString:"postgresql://playabook:8896@localhost:5432/invest"});

module.exports = pool;
