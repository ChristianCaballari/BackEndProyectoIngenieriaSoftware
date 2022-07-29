const { response } = require('express');
const database = require('../database/index');
const globalServices = require('../services/globalService');


const getArchivosPorSolicitud = async(req, res) =>{
    
     let globalS = new globalServices();
     
     let idSolicitud = req.params.idSolicitud;

     const promise = globalS.consultaDB(database.getArchivosPorSolicitud(idSolicitud));

     await promise.then(result =>{
          res.json({
               ok:true,
               msg: result
          });
     });
}

const getArchivosPorSolicitudDownload = async(req, res) =>{
    
     let globalS = new globalServices();
     console.log("Antes");
     console.log(req.body);
     console.log("Despues");
     const { idArchivoSolicitud, nombre } = req.body

     

     const promise = globalS.consultaDB(database.getArchivosPorSolicitudDownload(idArchivoSolicitud));

     await promise.then(result =>{
          res.json({
               ok:true,
               msg: result
          });
     });
}

module.exports = {
     getArchivosPorSolicitud,
     getArchivosPorSolicitudDownload
}