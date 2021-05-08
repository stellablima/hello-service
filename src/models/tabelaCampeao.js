const { Sequelize, DataTypes, Op } = require('sequelize')

const options = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    define: {
        timestamps: false
    },
    pool: {
        max: parseInt(process.env.DATABASE_POOL_MAX),
        acquire: parseInt(process.env.DATABASE_POOL_ACQUIRE_TIMEOUT)
    },
    timezone: '-03:00'
}

if(process.env.LOG_LEVEL !== 'debug'){
    options.logging = false //?
}

const sequelize = new Sequelize (
    process.env.DATABASE_SCHEMA,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    options
)

const DATABASE_BULK_CHUNCK_SIZE = parseInt(process.env.DATABASE_BULK_CHUNCK_SIZE)

const TabelaCampeao = sequelize.define('TabelaCampeao', {
    ID:{
        primaryKey: true,
        type: DataTypes.BIGINT(5),
        //allowNull: true
    },
    NOME_CAMPEAO:{
        type: DataTypes.STRING(10),
        allowNull: true
    },
    LINE:{
        type: DataTypes.STRING(15),
        allowNull: true
    },
    DATA_MODIFICACAO: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
    }
})

const bulkCreate = (queryStream, connection, tipoRelatorio) => {

}

const deketeOlderThan = (date) => {

}

module.exports = {
    sequelize,
    //bulkCreate,
    //deleteOlderThan
}