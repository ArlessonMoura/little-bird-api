const router = require("express").Router();
const { createUser } = require("../controllers/signUpController");
const middlewares = require("../middleware");

// validateEmail validatePassword

router.post(
  "/",
  middlewares.nameCheck,
  middlewares.emailCheck,
  middlewares.passwordCheck,
  createUser,
);

module.exports = router;
