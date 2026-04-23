import mysql from "mysql2/promise"

const dbPool= mysql.createPool({
    host: "198.251.89.126",
    database:"isivgxsa_modules",
    user:"isivgxsa_module_user",
    password:"=Y]A@ALM7d&_%McB",
    port:3306,
    connectionLimit:10
})

export default dbPool;