const {Sequelize} = require('sequelize')
require('dotenv').config();
const {DATABASE_URL} = process.env

const sequelize = new Sequelize(
    DATABASE_URL,
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

export default sequelize