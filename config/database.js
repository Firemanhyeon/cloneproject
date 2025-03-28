const { Sequelize } = require('sequelize');
require('dotenv').config();


console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD1);
const sequelize = new Sequelize(

    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD1,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT
    }
);


sequelize.authenticate()
    .then(() => console.log('connected'))
    .catch(err => console.log('err'));

module.exports = sequelize;