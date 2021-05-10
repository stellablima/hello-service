require('dotenv').config()
const logger = require('./helper/logger')
const CronJob = require('cron').CronJob
const { sequelize } = require('./models/tabelaCampeao')
const carga = require('./services/carga')
logger.info('Conectando ao BD...')

sequelize.sync().then( async () => {
  
    let isJobRunning = false
    logger.info('Aguardando execução do job...')
    const job = new CronJob(process.env.JOB_CRON_EXPRESSION, async () => {
        if(isJobRunning){
            logger.info('Job em execução...')
        }
        isJobRunning = true
        
        try {
            logger.info('Iniciando job...')
            await carga.start()
            //logger.info('Job finalizado')
        } catch(error) {
            logger.error(`Health NOK: Erro no Job [${error.message}]`)
        } finally {
            isJobRunning = false
            logger.info('O job acabou...')
        }
    }, null, true, 'America/Sao_Paulo')
    job.start()

}).catch(error => {
    logger.fatal(`Health NOK: Erro na conexão com o banco [${error.message}]`)
})
