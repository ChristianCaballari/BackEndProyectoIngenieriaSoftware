const { response } = require('express');
const database = require('../database/index');

const globalServices = require('../services/globalService');


const getSexo = async(req, res = response) =>{

     let globalS = new globalServices();
     
     const promise = globalS.consultaDB(database.getSexo());

     await promise.then(result => {
          
     res.json({
          ok:true,
          msg: result
     });
     });

}
module.exports = {
     getSexo
}