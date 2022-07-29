const { response } = require('express');
const database = require('../database/index');
const globalServices = require('../services/globalService');

const getCantones = async (req, res  = response) =>{

     let idProvincia = req.params.idProvincia;

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.cantones(idProvincia));

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });
}

module.exports = {
     getCantones
}
  