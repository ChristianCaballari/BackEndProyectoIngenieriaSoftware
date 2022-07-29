const { response } = require('express');
const database = require('../database/index');
const globalServices = require('../services/globalService');


const insertSolicitud = async(req,res) =>{

     const {palabraClave, asuntoDetallado, idClasificador } = req.body;

     console.log(req.body);
     console.log(req.params.idUsuario);

     const idUsuario = req.params.idUsuario;



     let globalS = new globalServices();

     const promise = globalS.consultaDB(database.insertarSolicitud(parseInt(idUsuario,16),palabraClave, asuntoDetallado, idClasificador));

     await promise.then(result =>{
          res.json({
               ok:true,
               msg: "Solicitud Realizada con exito"
          });
     });
}

const getSolicitudes = async(req, res) =>{

     let idUsuario = req.query.idUsuario;

     console.log(idUsuario);

     let globalS = new globalServices();

     const promise = globalS.consultaDB(database.getSolicitudes(idUsuario));

     await promise.then(result =>{
          res.json({
               ok:true,
               msg: result
          });
     });
}

const eliminarSolicitud = async(req, res) =>{

     const idSolicitud =req.params.idSolicitud;

     let globalS = new globalServices();

     const promise = globalS.consultaDB(database.eliminarSolicitud(idSolicitud));

     await promise.then(result =>{
          res.json({
               ok:true,
               msg: "Eliminado Correctamente"
          });
     });
}

const getSolicitudActualizar = async(req, res) =>{
     const idSolicitud = req.params.idSolicitud;

     let globalS = new globalServices();
   
     const promise = globalS.consultaDB(database.getSolicitudActualizar(idSolicitud));
   
     await promise.then((result) => {
       res.json({
         ok: true,
         msg: result,
       });
     });
}

const actualizarSolicitud = async(req, res) =>{

     const idSolicitud = req.params.idSolicitud;

     const {palabraClave, asuntoDetallado, idClasificador } = req.body;

      console.log(req.body);
      console.log(idSolicitud);


     let globalS = new globalServices();
   
     const promise = globalS.consultaDB(database.actualizarSolicitud(idSolicitud, palabraClave,asuntoDetallado,idClasificador ));
   
     await promise.then((result) => {
       res.json({
         ok: true,
         msg: "Solicitud actualizada correctamente",
       });
     });
}

module.exports = {
     insertSolicitud,
     getSolicitudes,
     eliminarSolicitud,
     getSolicitudActualizar,
     actualizarSolicitud
}