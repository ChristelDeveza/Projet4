const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "adherent";

  findSubscriptionByUser(id) {
    return this.connection.query(
      `SELECT adherent.Firstname, adherent.Name, abonnement.Name, abonnement.Price, abonnement.Description
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
      `update ${UserManager.table} set Name = ?, Firstname = ?, Address = ?, Email = ?, photoId = ? where id = ?`,
      [
        adherent.Name,
        adherent.Firstname,
        adherent.Address,
        adherent.Email,
        adherent.id,
        adherent.photoId,
      ]
    );
  }

  insertPhoto(photoId, adherentId) {
    return this.connection.query(
      `update ${UserManager.table} set photoId = ? where id = ?`,
      [photoId, adherentId]
    );
  }

  findByMail(email) {
    return this.connection.query(`select * from ${this.table} where Email=?`, [
      email,
    ]);
  }

  search(searchvalue) {
    const searchword = `%${searchvalue}%`;
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE Email LIKE ? OR Firstname LIKE ? OR Name LIKE ?`,
      [searchword, searchword, searchword]
    );
  }

  findUserProfile(id) {
    return this.connection.query(
      `SELECT adherent.Firstname, adherent.Name as Lastname, adherent.Address, adherent.Email, abonnement.Name as abName, abonnement.Price, programme.Name as prName, programme.description
    from  ${this.table} LEFT JOIN abonnement ON abonnement.id=adherent.Is_Abonnement LEFT JOIN adherent_has_programme ON adherent.id = adherent_id LEFT JOIN programme ON programme.id = programme_id
    where adherent.id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
