//Controlador para subir imagenes al servidor //pdf zip
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // uploads el el nombre de la carpeta
        //en donde se va a guardar los archivos
        //la carpeta debe existir
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

//myFile es el parametro por el cual se recibe el archivo que se va a cargar
exports.upload = upload.single('myFile')

exports.uploadFile = (req, resp) => {
    resp.send({
        data: 'Enviar un archivo'
    })
}

exports.get = (req, res) => {
    res.send({data:'Viene de upload por Get'})
}