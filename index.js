const express = require("express");
const app = express();
const router = require("./routers/book");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const port = process.env.PORT || 8000;
cors;
var moment = require("moment-timezone");
let date = moment().tz("Asia/Jakarta").format("hh:mm:ss");

const { sequelize } = require("./models");
const cron = require("node-cron");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send(
    `ok`
  );
});
app.use(router);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successfully ${port}`);
  } catch (error) {
    console.error("Koneksi ke database gaagal");
    console.log(error)
  }
});
