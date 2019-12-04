const Sequelize = require('sequelize');

//Conexion a la BD con sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Megalovania123!', {
    host: 'al17389.tech',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    module.exports = sequelize;
    