import express from 'express';
import router from './routes/routes.js'
import db from './config/db.js';


//  Crear SERVIDOR
const server = express();

//  Crear PUERTO Y HOST
const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

//  Conectar BASE DE DATOS
db.authenticate()
    .then(() => {return console.log('La Base de Datos está conectada')})
    .catch((error) => {return console.log(error)})

//  Habilitar PUG
server.set('view engine','pug');

//  Habilitar PUBLIC
server.use(express.static('public'));

//  Habilitar VARIABLES GLOBALES
server.use('/', (req,res,next) => {
    res.locals.nombreWeb = 'AGENCIA DE VIAJES';
    res.locals.fechaActual = new Date().getFullYear();
    next();
});

//  Habilitar BODY PARSER
server.use(express.urlencoded({extended:true}));

//  Habilitar RUTAS
server.use('/', router);

//  Habilitar SERVIDOR
server.listen(port,host,() => {
    console.log(`El servidor está funcionando por el puerto ${port} y el host ${host}`);
});