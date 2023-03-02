const POOL = require("pg").Pool;

   const pool = new POOL({
    user:"crypto_olfk_user",
    host:"dpg-cfvuvcqk728pn7u71dlg-a",
    password:"HB8fdNb29gXBU1Rqi6NzDUEzFBCgxjdc",
    database:"crypto_olfk",
    port:5432
})
;

module.exports = pool;
