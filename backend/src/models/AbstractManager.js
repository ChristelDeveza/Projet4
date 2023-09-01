class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table;
  }

  // find(id) {
  //   return this.connection.query(`select * from  ${this.table} where id = ?`, [
  //     id,
  //   ]);
  // }

  // find(id) {
  //   return this.connection.query(
  //     `select a.Name, a.Firstname, a.Address, a.Email, a.IsCoach, a.photoId, p.photo_path from  ${this.table} as a left join photo as p on p.id = a.photoId where a.id = ?`,
  //     [id]
  //   );
  // }

  find(id) {
    return this.connection
      .query(
        `SELECT a.Name, a.Firstname, a.Address, a.Email, a.IsCoach, a.photoId
         FROM ${this.table} AS a
         WHERE a.id = ?`,
        [id]
      )
      .then(([rows]) => {
        if (rows.length === 0 || rows[0].photoId === null) {
          // LEFT JOIN if photoId is null
          return this.connection.query(
            `SELECT a.Name, a.Firstname, a.Address, a.Email, a.IsCoach, a.photoId, p.photo_path
             FROM ${this.table} AS a
             LEFT JOIN photo AS p ON p.id = a.photoId
             WHERE a.id = ?`,
            [id]
          );
        }
        // else JOIN (photoId not null)
        return this.connection.query(
          `select a.Name, a.Firstname, a.Address, a.Email, a.IsCoach, a.photoId, p.photo_path from  ${this.table} as a join photo as p on p.id = a.photoId where a.id = ?`,
          [id]
        );
      });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  findAllUsers() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = AbstractManager;
