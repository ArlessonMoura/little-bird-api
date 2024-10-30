const signUpService = require("../services/signUpService");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: "7d",
  algorithm: "HS256",
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await signUpService.createUser(
    displayName,
    email,
    password,
    image,
  );
  if (!response) {
    return res.status(409).json({ message: "User already registered" });
  }
  const { id } = response;
  const token = jwt.sign({ data: { email, password, id } }, secret, jwtConfig);
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};