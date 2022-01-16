const express = require('express')
const router = express.Router()

const routes = [
    {
        path: 'user'
    },
    {
        path: 'items'
    },
    {
        path: 'auth'
    },
    {
        path: 'upload'
    }
]

routes.forEach(route => {
    return router.use(`/${route.path}`, require(`./${route.path}Router`))
})

module.exports = router