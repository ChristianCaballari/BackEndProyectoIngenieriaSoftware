const { response } = require('express');
const database = require('../database/index');
const globalServices = require('../services/globalService');


const getClasificadores = async(req,res) =>{

     let globalS = new globalServices();

     const promise = globalS.consultaDB(database.getClasificadores());

     await promise.then(result =>{
          res.json({
               ok:true,
               msg: result
          });
     });
}
const getCantidadSolictudPorClasificador = async(req, res = response) =>{

     let globalS = new globalServices();
     
     let idGrafica = req.params.idGrafica;

     
     const promise = globalS.consultaDB(database.CantidadSolictudPorClasificador());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });
}

module.exports = {
     getClasificadores,
     getCantidadSolictudPorClasificador
}