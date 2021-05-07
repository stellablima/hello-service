const pino = require('pino')

module.exports = pino ({
    name: 'hello-service',
    level: process.env.LOG_LEVEL,//'debug',//
    formatters: {
        level: label => {
            return { level: label}
        }
    },
    messageKey: 'message',
    timestamp: () => `,"timestamp":"${new Date().toISOString()}"`
})

//poderia ir direto, aqui parece que muda o time pra humano e o level vai ser info