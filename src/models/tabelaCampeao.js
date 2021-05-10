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
    /*campos setado automaticamente pelo serialize, poderia deletar
    ID:{
        primaryKey: true,
        type: DataTypes.BIGINT(5),
        autoIncrement: true,
        //allowNull: true
    }, */
    NOME:{
        type: DataTypes.STRING(10),
        allowNull: true
    },
    LINE:{
        type: DataTypes.STRING(32),
        allowNull: true
    },
    DATA_MODIFICACAO: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: true
    }
})

const bulkCreate = (queryStream, connection, tipoRelatorio) => {

}

const deleteOlderThan = (date) => {
    return TabelaCampeao.destroy({
        where: {
            DATA_MODIFICACAO: {
                [Op.lt]: date
            }
        }
    })
}

module.exports = {
    sequelize,
    //bulkCreate,
    deleteOlderThan
}

