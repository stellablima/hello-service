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


create database sever_db;
\l
\c sever_db;
INSERT INTO public."TabelaCampeaos"("NOME", "LINE")	VALUES ( 'Lux', 'Vamos iluminar isso aqui!');
\dt;
\d public."TabelaCampeaos";
select * from public."TabelaCampeaos";


--job start--
src/services/carga



dockerfile
.dockerignore
git push --set-upstream origin master
///////////////////////////////


https://www.youtube.com/watch?v=Ft3F7wWA-x8&list=PLucm8g_ezqNoAkYKXN_zWupyH6hQCAwxY&index=6
cria db: create database sever_db
Listar bancos disponíveis: \l
Mudar para banco: \c sever_db;
create user bob with password 'mypass';
drop database sever_db;
create schema public;
create table public."TabelaCampeao"( nome CHAR(15), line CHAR(20));
\d public."TabelaCampeaos";
\dt;
\dt public."TabelaCampeaos";
delete --tabelaChampeaos;