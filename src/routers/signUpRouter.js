const router = require("express").Router();
const { createUser } = require("../controllers");

router.post("/", createUser);

module.exports = router;