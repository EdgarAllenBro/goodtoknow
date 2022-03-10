const {Sequelize} = require('sequelize')
require("dotenv").config()
const {DATABASE_URL} = process.env

const sequelize = new Sequelize(
    `postgres://lvcrglfsrfwifg:5fdf84b1fa52e910a4261655a79cd3ca00cff4d3eb0aed7af0e4d4443da8f20b@ec2-34-230-133-163.compute-1.amazonaws.com:5432/dfde04d1ji65va`,
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
    .then(dbres=> res.status(200).send(dbres))
    .catch(err=>console.log(err))
}


}