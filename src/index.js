const express = require("express");
require("dotenv").config();

const userRouters = require("./routers/userRouter");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/user", userRouters);

module.exports = app;
