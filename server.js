const express = require("express")
const app = express();
const path = require("path");

const schedule = require('./schedule.js');
const bodyParser = require("body-parser");
schedule.init()

const PORT = process.env.PORT || 3001

const mongoose = require("mongoose");
var cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));

mongoose
  .connect('mongodb+srv://mongomeron:mongoskolan1337@nhil.57ja3d4.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => {
    console.log('databasen är kopplad');
  })
  .catch((_error) => {
    console.log('Det blir ba error med databasen asså');
    process.exit();
  })



app.get('/api', (req, res) => {
  res.json({
    message: "Shorty all good ahaha"
  })
})

app.post("/", (req, res) => {
  res.send("Baby d post request hours")
});


app.listen(PORT, () => {
  console.log(`Servern kutar fan sönder på port ${PORT}`);
});
