const { response } = require('express');
const database = require('../database/index');

const globalServices = require('../services/globalService');


const getDatosGraicasSinResponder = async(req, res = response) =>{

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.solicitudesSinResponder());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });
}

const getCantidadRespuestaLegal = async(req, res = response) =>{

     let globalS = new globalServices();
     
     let idGrafica = req.params.idGrafica;

     
     const promise = globalS.consultaDB(database.cantidadRespuestaLegal());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });
}
module.exports = {
     getDatosGraicasSinResponder,
     getCantidadRespuestaLegal,
}