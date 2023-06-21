const Sequelize = require('sequelize');
const sequelize = require('./connection.cjs');//recebe o arquivo de conexão com o banco de dados

const grupo = sequelize.define('grupos', {
    idGrupo : {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    nomeGrupo: {
        type: Sequelize.STRING(70),
        allowNull: false,
    },
    link: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },   
    desc: {
        
        type: Sequelize.STRING(100),
        allowNull: false,
    }
   
});
//grupo.sync({force:true});
module.exports = grupo;