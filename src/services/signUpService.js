const { User } = require("../models");
require("dotenv").config();

const createUser = async (displayName, email, password, image) => {
  const check = await User.findOne({ where: { email } });
  if (check) {
    return null;
  }
  const response = await User.createUser({
    displayName,
    email,
    password,
    image,
  });

  return response;
};

module.exports = { createUser };
