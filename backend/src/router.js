const express = require("express");

const { AdherentController } = require("./controllers");

const router = express.Router();

// Route register
router.post("/register", AdherentController.browse);

// Route get subscription
router.get("/usersubscription", AdherentController.browse);

// Route get user programme
router.get("/userprogramme", AdherentController.browse);

// Route get one user datas
router.get("/userdatas/:id", AdherentController.read);

router.put("/userdatas/:id", AdherentController.edit);

// router.get("/items", ItemController.browse);
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
