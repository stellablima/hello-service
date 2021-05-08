require('dotenv').config()
const logger = require('./helper/logger')
const CronJob = require('cron').CronJob
const { sequelize } = require('./models/tabelaCampeao')

logger.info('Conectando ao BD...')

sequelize.sync().then( async () => {
  
    let isJobRunning = false
    logger.info('Aguardando execução do job...')
    const job = new CronJob(process.env.JOB_CRON_EXPRESSION, async () => {
        if(isJobRunning){
            logger.info('Job em execução...')
        }
        logger.info('Iniciando job...')
        isJobRunning = true

        try {
            
        } catch {

        } finally {
            isJobRunning = false
            logger.info('O job acabou...')
        }
    }, null, true, 'America/Sao_Paulo')
    job.start()

}).catch(error => {
    logger.fatal(`Health NOK: ${error.message}`)
})
