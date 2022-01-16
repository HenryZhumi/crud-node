const express = require('express')
const controller = require('../controllers/authController')
const router = express.Router()

/**
 * Login
 */
router.post(
    `/login`,
    controller.login
)

/**
 * Login
 */
router.post(
    `/register`,
    controller.register
)

router.get(
    `/`, controller.get
)

module.exports = router