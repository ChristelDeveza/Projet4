const express = require("express");

const { ItemController } = require("./controllers");

const router = express.Router();

// Route register
router.post("/register", ItemController.browse);

// Route get user datas
router.get("/userdatas", ItemController.browse);

// Route get subscription
router.get("/usersubscription", ItemController.browse);

// Route get user programme
router.get("/userprogramme", ItemController.browse);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
