const express = require('express')
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const userController = require('../controllers/userController')

const router = express.Router()

/**
 * Se segmenta las rutas y el metodo res.send se realiza 
 * dentro de un controlador para tener un mejor
 * orden del codigo
 */
//Metodo get de las rutas
router.get(
    `/`, userController.getData
)

/**
 * Ruta: /user GET por ID
 */
 router.get(
    `/:id`, userController.getSingle
)


//metodo post
router.post(
    `/`, userController.insertData
)


/**
 * Ruta: /user PUT
 */
router.put(
    `/:id`,
    userController.updateSingle
)


/**
 * Ruta: /user DELETE
 */
router.delete(
    `/:id`,
    userController.deleteSingle
)


module.exports = router