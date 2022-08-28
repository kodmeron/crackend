const express = require("express")

const app = express()

const PORT = process.env.PORT || 3001

const schedule = require('./schedule.js')
schedule.init()

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
