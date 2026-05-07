const mysql = require("mysql2");

/*const connection = mysql.createConnection({
  host: "localhost",
  user: "projecta",
  password: process.env.DB_PASSWORD,
  database: "projecta"
});*/

const pool = mysql.createPool({
  host: "localhost",
  user: "projecta",
  password: process.env.DB_PASSWORD,
  database: "projecta",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/*const pool = mysql.createPool({
  host: "srv792.hstgr.io",
  user: "u654914095_projecta",
  password: process.env.DB_PASSWORD,
  database: "u654914095_projecta",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});*/

pool.getConnection((err, conn) => {
  if (err) {
    console.error("Erro ao conectar:", err);
    return;
  }

  console.log("Banco conectado");

  conn.release(); // 🔥 MUITO IMPORTANTE
});

module.exports = pool;