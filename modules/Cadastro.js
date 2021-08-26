const db = require('./db')

const Candidatos = db.sequelize.define('candidatos', {
    nome: {
        type: db.Sequelize.STRING
    },
    cargo: {
        type: db.Sequelize.STRING
    }
})

//Candidatos.sync({force: true})

module.exports = Candidatos