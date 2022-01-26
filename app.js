if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
const errorHandler = require("./middlewares/errorHandler");
const Router = require("./routes");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', Router);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// npx sequelize-cli model:generate --name Cart --attributes userId:integer,productId:integer
 