const mysql = require("mysql");
const databaseConfig = require("../config").database;

const pool = mysql.createPool(databaseConfig);
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }
  if (connection) {
    connection.release();
  }
  return;
});

class Database {
  static query(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static getTotal(table) {
    return this.query(`SELECT count(*) FROM ${table}`).then(
      val => Object.values(val[0])[0]
    );
  }

  static getTotalByFilter(table, key, val, isLike = false) {
    let sql = `SELECT count(*) FROM ${table} WHERE ${key}='${val}'`;

    if (isLike) {
      sql = `SELECT count(*) FROM ${table} WHERE ${key} LIKE '%${val}%'`;
    }

    return this.query(sql).then(val => Object.values(val[0])[0]);
  }
}

module.exports = Database;
