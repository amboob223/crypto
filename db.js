const POOL = require("pg").Pool
const pool = new POOL({
    connectionString: 'postgres://crypto_olfk_user:HB8fdNb29gXBU1Rqi6NzDUEzFBCgxjdc@dpg-cfvuvcqk728pn7u71dlg-a.ohio-postgres.render.com/crypto_olfk',
    ssl: {
      rejectUnauthorized: false
    }
})

module.exports = pool;