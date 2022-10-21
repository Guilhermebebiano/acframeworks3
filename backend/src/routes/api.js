const express = require("express");

const Aulaframeworks = require("../../app/controllers/Aulaframeworks");

const router = express.Router();

router.get("/users", Aulaframeworks.index);

module.exports = router;
