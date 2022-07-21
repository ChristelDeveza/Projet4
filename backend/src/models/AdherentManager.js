const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "adherent";

  findSubscriptionByUser(id) {
    return this.connection.query(
      `SELECT adherent.firstname, adherent.Name, abonnement.Name, abonnement.Price, abonnement.Description
    from  ${this.table} INNER JOIN abonnement ON abonnement.id=adherent.Is_Abonnement
    where adherent.id = ?`,
      [id]
    );
  }

  insert(adherent) {
    return this.connection.query(
      `insert into ${UserManager.table} (Name, Firstname, Address, Email, Password) values (?,?,?,?,?)`,
      [
        adherent.Name,
        adherent.Firstname,
        adherent.Address,
        adherent.Email,
        adherent.Password,
      ]
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

  findByMail(email) {
    return this.connection.query(`select * from ${this.table} where Email=?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
