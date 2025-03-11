var express = require("express");
var router = express.Router();
const favoriteController = require("../controllers/favoriteController");

router.get("/", favoriteController.getFavorite);

module.exports = router;
