const Sequelize = require("sequelize")

const sequelize = new Sequelize('jobnet','root', 'python21', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}