const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "adherent";

  insert(adherent) {
    return this.connection.query(
      `insert into ${UserManager.table} (title) values (?)`,
      [adherent.title]
    );
  }

  update(adherent) {
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [adherent.title, adherent.id]
    );
  }
}

module.exports = UserManager;
