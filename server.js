// Agregar que se requiere express
const express = require("express")
//Instanciar express en nuestra aplicacion
const app = express()

const port = 3001
const initDB = require('./config/db')
const bodyParser = require('body-parser')


const passport = require('passport')

//const passport = require('passport')

// for parsing json
app.use(
    bodyParser.json({
        limit: '20mb'
    })
)
// for parsing application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

//Crea el metodo get para probar el sistema
// Para que funcione la aplicacion es nesesario agregar START en package.json con el archivo que se inicia el programa
// npm install -D nodemon => sirve para no tener que levantar nuevamente el servidor cuando se haga mas cambios, es -D por que solo se instala en desarrollo

//Importar el modulo de rutas del usuario
/*
const userRouters = require('./app/routes/userRouter')

const itemsRouters = require('./app/routes/itemsRouter')

const uploadRouters = require('./app/routes/uploadRouter')
*/
/**
 * Este metodo se realiza cuando no se tiene las rutas ni controladores 
 * especificados. 
 * 
 * No es recomendable
 * 
 * app.get(
    '/', (req, respuesta) => {
    respuesta.send({
        data: 'Hola Mundo 2'
    })
})
 */
/*
sin utilizar index.js
app.use(userRouters)
app.use(itemsRouters)
app.use(uploadRouters)
*/

app.use(passport.initialize())
//rutas de index
app.use(require('./app/routes'))

// Se utiliza para levantar la aplicacion
app.listen(port, () => {
    console.log('La aplicacion esta en linea..');
})

//inicializar la DB
initDB();