import sequelize from 'Sequelize.js'
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const axios = require('axios')
app.use(cors())
app.use(express.json())
app.use(express.static('client'))
const port = process.env.PORT || 3000



const results = sequelize.query('SELECT * FROM threads')


app.get('/index/threads',(req,res)=>{res.status(200).send(results)})




app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})