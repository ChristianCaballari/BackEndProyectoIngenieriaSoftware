const { response } = require('express');
const database = require('../database/index');
const globalServices = require('../services/globalService');

const getDistritos = async (req, res  = response) =>{

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.distritos());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });
}

const getDistritosPorCanton = async (req, res  = response) =>{

     let idCanton = req.params.idCanton;

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.distritosPorCanton(idCanton));

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });
}


module.exports = {
     getDistritos,
     getDistritosPorCanton
}