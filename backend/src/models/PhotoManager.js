const AbstractManager = require("./AbstractManager");

class PhotoManager extends AbstractManager {
  static table = "photo";

  insert(photo) {
    return this.connection.query(
      `insert into ${PhotoManager.table} (photo_path) values (?)`,
      [photo.photo_path]
    );
  }

  update(photo) {
    return this.connection.query(
      `update ${PhotoManager.table} set photo_path = ? where id = ?`,
      [photo.id, photo.photo_path]
    );
  }
}

module.exports = PhotoManager;
