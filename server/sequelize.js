require('dotenv').config({path: __dirname + '/../.env'})
const {Sequelize} = require('sequelize')
const {DATABASE_STRING} = process.env

const sequelize = new Sequelize(
    DATABASE_STRING,
    {
        dialect: 'postgres',
        dialectOptions:{
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },

    }
);

module.exports ={
getThreads: (req,res) =>{
    sequelize.query(`SELECT * FROM threads`)
    .then(dbres=> res.status(200).send(dbres[0]))
    .catch(err=>console.log(err))
},
newThread: (req,res) =>{
    console.log(req.body.content)
   let type = req.body.type
   let content = req.body.content
   let title = req.body.title
sequelize.query(`INSERT INTO threads (title, content, tag) VALUES ('${title}','${content}','${type}')`)
},
newComment: (req,res)=>{
    let threadId = req.body.threadid
    let comment = req.body.comment
sequelize.query(`INSERT INTO comments (content, threadid) VALUES ('${comment}','${threadId}')`)
.catch(err=>{console.log(err)})
    },
getComments:(req,res)=>{
let threadid = req.body.threadId
console.log(threadid)
sequelize.query(`SELECT * FROM comments
WHERE threadid = ${threadid}`)
.then(dbres=> res.status(200).send(dbres[0]))
.catch(err=>{console.log(err)})
}

}