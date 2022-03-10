const express = require('express')
const app = express()
const port = 3001;
const cors = require('cors')
const {getThreads} = require('./sequelize')
app.use(cors())
app.use(express.json())

app.get('/threads',getThreads)




app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})