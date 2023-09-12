const express = require("express");
const router = express.Router();
const shoesCtrl = require("../../controllers/api/shoes");

router.get("/", shoesCtrl.index);
router.get("/:id", shoesCtrl.show);

module.exports = router; 