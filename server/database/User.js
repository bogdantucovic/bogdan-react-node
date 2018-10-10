const bcrypt = require("bcryptjs");
const Database = require("./index");

class User extends Database {
  static save(payload) {
    const { name, email, password } = payload;
    const hash = bcrypt.hashSync(password, 10);
    const sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hash}')`;

    return this.query(sql);
  }

  static comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }

  static findByEmail(email) {
    const sql = `SELECT * FROM users WHERE email = '${email}'`;

    return this.query(sql);
  }

  static findById(id) {
    const sql = `SELECT * FROM users WHERE id = '${id}'`;

    return this.query(sql);
  }

  static getUser(id) {
    const sql = `SELECT id, name, email FROM users WHERE id = '${id}'`;

    return this.query(sql).then(res => res[0]);
  }
}

module.exports = User;
