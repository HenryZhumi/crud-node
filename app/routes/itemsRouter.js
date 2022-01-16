const express = require('express')

const itemsController = require('../controllers/itemsController')

const router = express.Router()
/*
const path = 'items'

router.get(
    `/${path}`, itemsController.getData
)
*/


router.get(
    `/`, itemsController.getData
)
module.exports = router