const express = require("express");

const AulaFrameworks = require("../../app/controllers/AulaFrameworks");

const router = express.Router();

router.get("/users", AulaFrameworks.index);

module.exports = router;
