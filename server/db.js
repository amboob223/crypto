const POOL = require("pg").Pool;
const pool = new POOL({
    user: "playabook",
    host: "localhost",
    port: 5432,
    password: "8896",
    database: "invest"
});

module.exports = pool;