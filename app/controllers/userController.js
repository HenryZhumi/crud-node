const mongoose = require('mongoose')
const model = require('../models/userModel')


const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

/**
 * Obtener DATA de USUARIOS
 */

//para paginar
const opciones={
    page: 1,
    limit: 10
}
//sin paginacion
/*
exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        res.send({
            Registros: docs,
            Mensaje: 'Correcto',
            Request: req.body
        })
    })
}*/

//paginacion
exports.getData = (req, res) => {
    model.paginate({}, opciones, (err, docs) => {
        res.send({
            Registros: docs,
            Mensaje: 'Correcto',
            Request: req.body
        })
    })
}

exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }

    })
}


/**
 * Obtener DATA de USUARIOS pod ID
 */

exports.getSingle = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

/**
 * Update DATA de USUARIOS
 */

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

/**
 * Delete DATA de USUARIOS
 */

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}
