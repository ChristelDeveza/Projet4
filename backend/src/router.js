const express = require("express");

const upload = require("./upload");

const { AdherentController, ProgrammeController } = require("./controllers");
const { authorization, isAdmin } = require("./controllers/AdherentController");

const router = express.Router();

// Route register
router.post("/register", AdherentController.register);

// Route login
router.post("/login", AdherentController.login);

// Route photo
router.post(
  "/upload",
  upload.single("photo"),
  authorization,
  AdherentController.postPhoto
);

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

// Route update one user photo
router.put("/userdatas", authorization, AdherentController.addPhoto);

// Route logout
router.get("/logout", authorization, AdherentController.logout);

// Route admin to access all users
router.get("/admin", authorization, isAdmin, AdherentController.getAllUsers);

// Route search pour l'Admin
router.get("/search/admin", authorization, isAdmin, AdherentController.search);

// Route display user profile Admin
router.get(
  "/admin/userProfile/:id",
  authorization,
  // isAdmin,
  AdherentController.readUserProfile
);

// Route pour supprimer un membre par l'admin
router.delete(
  "/members/:id",
  authorization,
  isAdmin,
  AdherentController.delete
);

// router.get("/items", ItemController.browse);
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
