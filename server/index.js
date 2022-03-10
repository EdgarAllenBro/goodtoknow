const express = require('express')
const app = express()
const port = 3001;
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req)
    res.status(200).send('hello world')
})




app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})