const { User } = require("../models");
require("dotenv").config();

const createUser = async (userName, email, password) => {
  const check = await User.findOne({ where: { email } });
  if (check) {
    return null;
  }
  const response = await User.createUser({
    userName,
    email,
    password,
  });

  return response;
};

module.exports = { createUser };
