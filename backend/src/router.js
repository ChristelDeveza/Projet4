const express = require("express");

const { AdherentController, ProgrammeController } = require("./controllers");
const { authorization, isAdmin } = require("./controllers/AdherentController");

const router = express.Router();

// Route register
router.post("/register", AdherentController.register);

// Route login
router.post("/login", AdherentController.login);

// Route get subscription
router.get("/usersubscription/:id", AdherentController.getSubscriptionByUser);

// Route get programme
router.get("/programme", AdherentController.browse);

// Route get programme by id
router.get("/programme/:id", ProgrammeController.getProgrammeById);

// Route get one user datas
router.get("/userdatas", authorization, AdherentController.read);

// Route update one user datas
router.put("/userdatas", authorization, AdherentController.edit);

// Route logout
router.get("/logout", authorization, AdherentController.logout);

// Route admin to access all users
router.get("/admin", authorization, isAdmin, AdherentController.getAllUsers);

// Route search pour l'Admin
router.get("/search/admin", authorization, isAdmin, AdherentController.search);

// router.get("/items", ItemController.browse);
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
