const express = require('express')
const uploadController = require('../controllers/uploadController')
const router = express.Router()


router.post(
    `/`,
    uploadController.upload,
    uploadController.uploadFile
)

router.get(
    `/`, uploadController.get
)
module.exports = router

//Descpues de crear este modulo instalar el paquete  Multer
//npm install multer y posteriormente configurar el controlador