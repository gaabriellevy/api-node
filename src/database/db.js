const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dabase.sqlite'
})

module.exports = sequelize;