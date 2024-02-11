const express = require("express");
const dotenv = require("dotenv").config()
const cors = require("cors");
const port = 8000;
const app = express();

app.use("/", require("./routes/AuthRoute"))

app.listen(port, () => console.log(`Server is running on port ${port}`));