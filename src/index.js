const express = require("express");
require("dotenv").config();

const signUpRouter = require("./routers/signUpRouter");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/user", signUpRouter);

module.exports = app;
