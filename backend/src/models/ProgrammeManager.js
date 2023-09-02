const AbstractManager = require("./AbstractManager");

class ProgrammeManager extends AbstractManager {
  static table = "programme";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  findProgById(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProgrammeManager;
