/**
 * CONECTARSE A UNA BD DE MONGO
 * Instalar antes
 * npm install mpngoose --save
 */

const mongoose = require('mongoose')
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
const DB_URI = "mongodb://localhost:27017/my_app_node"

module.exports =() =>{
    const conect = () =>{
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            },
            (err)=>{
                if(err){
                    console.log('Db Error')
                }else{
                    console.log('Conexion correcta')
                }
            }
        )
    }
    conect();
}