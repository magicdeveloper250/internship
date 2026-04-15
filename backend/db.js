import mysql from "mysql2/promise"

const dbPool= mysql.createPool({
    host: "localhost",
    database:"e_learning",
    user:"root",
    password:"",
    port:3306
})

export default dbPool;