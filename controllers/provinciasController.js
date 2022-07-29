const { response } = require('express');
const database = require('../database/index');
const globalServices = require('../services/globalService');

const getProvincias = async (req, res  = response) =>{

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.provincias());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });
}

module.exports = {
     getProvincias
}