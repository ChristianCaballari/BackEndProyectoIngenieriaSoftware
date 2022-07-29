const { response } = require('express');
const database = require('../database/index');

const globalServices = require('../services/globalService');


const getPaises = async(req, res = response) =>{

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.paises());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });
}

const getDatosUsuarioGrafica = async(req, res = response) =>{

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.getDatosUsuarioGrafica());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });

}

module.exports = {
     getPaises,
     getDatosUsuarioGrafica
}