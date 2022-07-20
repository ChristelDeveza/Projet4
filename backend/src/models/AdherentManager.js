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
      `update ${UserManager.table} set Name = ?, Firstname = ?, Address = ?, Email = ? where id = ?`,
      [
        adherent.Name,
        adherent.Firstname,
        adherent.Address,
        adherent.Email,
        adherent.id,
      ]
    );
  }
}

module.exports = UserManager;
