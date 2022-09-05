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

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAe5WnwUJjsyQAD5_uHGoDnIp6Z4hHFDTs",
  authDomain: "nhil-4830c.firebaseapp.com",
  projectId: "nhil-4830c",
  storageBucket: "nhil-4830c.appspot.com",
  messagingSenderId: "670568431262",
  appId: "1:670568431262:web:aa8df78715d0a1ed95058f",
  measurementId: "G-VV917461H4"
};

const appConf = initializeApp(firebaseConfig);
const analytics = getAnalytics(appConf);

app.use("/text/", require('./Routes/TextRoute'))

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
