const pg = require('pg')
const logger = require('../helper/logger')
const { bulkCreate, deleteOlderThan } = require('../models/tabelaCampeao')
const moment = require('moment')
//tentar reorganizar separar pastas


const start = async () => {
    //porque tem que reconectar? e porque nao fecha a conexao?
    const connection = new pg.Client({
        host: process.env.DATABASE_HOST,  
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_SCHEMA
    })//client.connect();

    logger.info(`Deletando registros mais antigos que ${process.env.DAYS_TO_KEEP_DATABASE_TABLE} dias`)
    await deleteOlderThan(moment().subtract(parseInt(process.env.DAYS_TO_KEEP_DATABASE_TABLE), 'days').toDate())
    logger.info(`Inserindo registros`)


}

module.exports = {
    start
}