const { response } = require('express');
const database = require('../database/index');

const globalServices = require('../services/globalService');


const getSolicitudesAdmin = async(req, res = response) =>{

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.getSolicitudesAdmin());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });

}
const actualizarSolicitudAdmin = async(req, res = response) =>{

     const { idUsuarioRespuesta , detalleRespuesta ,idSolicitud,idRespuestaLegal } =req.body;

     console.log("Holaaaa");
     console.log(req.body);
     console.log("Hollaaaaaaaaartt");

      let globalS = new globalServices();
     
      const promise = globalS.consultaDB(database.actualizarSolicitudAdmin(idSolicitud,idUsuarioRespuesta, detalleRespuesta,idRespuestaLegal));

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: "Respuesta Agregada correctamente"
     });
     });
}

const insertarArchivoSolicitud = async(req, res = response) =>{

     const {archivo,comentario,idSolicitud, nombre, tipo} = req.body;

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.insertarArchivoSolicitudAdmin(idSolicitud, archivo, comentario, nombre, tipo));

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: "Archivo agregado correctamente"
     });
     });
}


const getCantidadCambioSolicitudAdmin = async(req, res) =>{

     const idSolicitud = req.params.idSolicitud;
     console.log("Antessssssssssssssss");
     console.log(idSolicitud);
     console.log("Despuessssssssssssssss");
     let globalS = new globalServices();
   
     const promise = globalS.consultaDB(database.getCantidadCambioSolicitud(parseInt(idSolicitud)));
   
     await promise.then((result) => {
       res.json({
         ok: true,
         msg: result,
       });
     });
}
module.exports = {
     getSolicitudesAdmin,
     actualizarSolicitudAdmin,
     insertarArchivoSolicitud,
     getCantidadCambioSolicitudAdmin
}