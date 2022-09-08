const express = require("express")
const app = express();
const path = require("path");

const schedule = require('./schedule.js');
const bodyParser = require("body-parser");
schedule.init()

const PORT = process.env.PORT || 3001

var cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));

app.use("/text/", require('./Routes/TextApi'))


app.post("/", (req, res) => {
  res.send("Baby d post request hours")
});


app.listen(PORT, () => {
  console.log(`Servern kutar fan sönder på port ${PORT}`);
});
