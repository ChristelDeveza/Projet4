const argon2 = require("argon2");
const models = require("../models");

class UserController {
  // Register a user
  static register = async (req, res) => {
    const { Name, Firstname, Address, Email, Password } = req.body;
    // TODO validations (length, format...)
    try {
      const hashedPassword = await argon2.hash(Password);

      models.adherent
        .insert({ Name, Firstname, Address, Email, Password: hashedPassword })
        .then(([result]) => {
          res.status(201).send({ ...result, id: result.insertId });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        error: "error",
      });
    }
  };

  static browse = (req, res) => {
    models.programme
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // Get user datas
  static read = (req, res) => {
    models.adherent
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // Get user subscription
  static getSubscriptionByUser = (req, res) => {
    models.adherent
      .findSubscriptionByUser(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // Update adherent datas
  static edit = (req, res) => {
    const adherent = req.body;
    adherent.id = parseInt(req.params.id, 10);

    models.adherent
      .update(adherent)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    models.item
      .insert(item)
      .then(([result]) => {
        res.status(201).send({ ...item, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.item
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
