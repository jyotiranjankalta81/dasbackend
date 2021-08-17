require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT | 3000;

require("./db/dataconnection");


// importing routes
const Mail = require('./routes/mail');
const registerRouter = require("./routes/registerRouter");


app.use(express.json());


app.use("/api",Mail);
app.use("/api",registerRouter);

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })