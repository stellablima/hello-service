Linha do tempo, primeiro serviço ^^/


1.
npm init -y
.gitignore
README.md
src/index.js:
npm install dotenv --save / require('dotenv').config() //tentar fazer por fora depois
var.env



configurando pino (logger e debug):
npm install pino --save
src/helper/logger.js

index.js:
const pino = require('/pasta')

npm install cron --save
const CronJob = require('cron').CronJob


const { sequelize } = require('./models/tabelaCampeao')
sequelize.sync().then().catch()

src/models/tabelaCampeao.js

npm install sequelize --save
npm install pg --save

postgress instalar local(sdds mongo atlas)

create database servico_db;
\c servico_db;
\dt;
\dt *tabela*;
///////////////////////////////
delete --tabelaChampeaos;
\d tabelaChampeao
tabelaCampeaos
tabelaChampeaos




dockerfile
.dockerignore