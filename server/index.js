const express = require('express')
const app = express()
const port = 3001;
const cors = require('cors')
const {getThreads, newThread,newComment,getComments} = require('./sequelize')
app.use(cors())
app.use(express.json())

app.get('/threads',getThreads)
app.post('/newThread', newThread)
app.post('/comment', newComment)
app.post('/comments', getComments)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})