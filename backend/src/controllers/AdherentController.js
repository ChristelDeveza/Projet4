const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  // Register a user
  static register = async (req, res) => {
    const { Name, Firstname, Address, Email, Password, IsCoach } = req.body;

    if (!Name || !Firstname || !Address || !Email || !Password) {
      res.status(400).send("Please specify all");
      return;
    }

    try {
      const hashedPassword = await argon2.hash(Password);

      models.adherent
        .insert({
          Name,
          Firstname,
          Address,
          Email,
          Password: hashedPassword,
          IsCoach,
        })
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

  // user login
  static login = (req, res) => {
    const { email, password } = req.body;
    // if email or password field is empty
    if (!email || !password) {
      res
        .status(400)
        .send({ error: "Error, email and password must been specified" });
    }
    // if email and password are not empty
    models.adherent
      .findByMail(email)
      .then(async ([rows]) => {
        if (rows[0] == null) {
          res.status(401).send({
            error: "Invalid email",
          });
        } else {
          const {
            id,
            Email: emailLogin,
            Password: hashedPassword,
            IsCoach,
          } = rows[0];

          if (await argon2.verify(hashedPassword, password)) {
            const token = jwt.sign(
              { id, IsCoach },
              process.env.JWT_AUTH_SECRET,
              {
                expiresIn: "1h",
              }
            );

            res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
              })
              .status(200)
              .send({
                id,
                emailLogin,
                IsCoach,
              });
          } else {
            res.status(401).send({
              error: "Invalid password",
            });
          }
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
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

  // Get user datas without middleware
  // static read = (req, res) => {
  //   models.adherent
  //     .find(req.params.id)
  //     .then(([rows]) => {
  //       if (rows[0] == null) {
  //         res.sendStatus(404);
  //       } else {
  //         res.send(rows[0]);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  // Get user datas with middleware
  static read = (req, res) => {
    const id = req.userId;

    models.adherent
      .find(id)
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
  // static edit = (req, res) => {
  //   const adherent = req.body;
  //   adherent.id = parseInt(req.params.id, 10);

  //   models.adherent
  //     .update(adherent)
  //     .then(([result]) => {
  //       if (result.affectedRows === 0) {
  //         res.sendStatus(404);
  //       } else {
  //         res.sendStatus(204);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // };

  // Update adherent datas with middleware
  static edit = (req, res) => {
    const adherent = req.body;

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

  // eslint-disable-next-line consistent-return
  static postPhoto = (req, res) => {
    const photoPath = req.file ? req.file.path : null;

    try {
      if (!photoPath) {
        return res
          .status(400)
          .send("Le fichier photo n'a pas été correctement téléchargé.");
      }

      models.photo
        .insert({ photo_path: photoPath })
        .then(([result]) => {
          const photoId = result.insertId;
          const adherentId = req.body.id;
          // this.addPhoto(req, res, adherentId, photoId);
          res.send({ photoId, id: adherentId });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static addPhoto = (req, res) => {
    const { id, photoId } = req.body;
    models.adherent
      .insertPhoto(photoId, id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // à utiliser pour la création d'un programme par l'admin ou d'un abonnement
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

  // User logout
  static logout = (req, res) => {
    return res.clearCookie("access_token").sendStatus(200);
  };

  // Delete adherent with id by admin only
  static delete = (req, res) => {
    models.adherent
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // Get all users admin only
  static getAllUsers = (req, res) => {
    models.adherent
      .findAllUsers()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // Search users by admin only
  static search = (req, res) => {
    const { searchValue } = req.query;
    models.adherent
      .search(searchValue)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // Get user datas by admin with middleware
  static readUserProfile = (req, res) => {
    const adherent = req.body;
    adherent.id = parseInt(req.params.id, 10);
    models.adherent
      .findUserProfile(adherent.id)
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

  // Middleware - vérify token
  static authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(401);
    }
    try {
      const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
      req.userId = data.id;
      req.IsCoach = data.IsCoach;
      return next();
    } catch {
      return res.sendStatus(401);
    }
  };

  // IsAdmin function
  static isAdmin = (req, res, next) => {
    if (req.IsCoach === 1) {
      return next();
    }
    return res.sendStatus(403);
  };
}

module.exports = UserController;
