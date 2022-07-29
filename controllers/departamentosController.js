const { response } = require('express');
const database = require('../database/index');
const globalServices = require('../services/globalService');


const getDepartamentos = async(req, res) =>{
    
     let globalS = new globalServices();

     const promise = globalS.consultaDB(database.getDepartamentos());

     await promise.then(result =>{
          res.json({
               ok:true,
               msg: result
          });
     });
}

const crearDepartamento = async(req, res = response) =>{

     console.log(req.body);
     const {departamento, idPais, idDistritoDep,idPronvincia, idCanton } = req.body;

     console.log(req.body);

     let globalS = new globalServices();

     const promise = globalS.consultaDB(database.insertarDepartamento(departamento,idPais,idDistritoDep,idPronvincia, idCanton));

     await promise.then(result =>{
        res.json({
             ok:true,
        })
     });  
}


const getDepartamentoActualizar = async(req, res = response) =>{

     const idDepartamento = req.params.idDepartamento;

     let globalS = new globalServices();

     const promise = globalS.consultaDB(database.getDepartamento(idDepartamento));

     await promise.then(result =>{
          res.json({
               ok:true,
               msg: result
          })
       }); 
}
const actualizarDepartamento = async(req, res = response) => {

    const idDepartamento = req.params.idDepartamento;
    const {departamento, idPais, idDistritoDep,idPronvincia, idCanton } = req.body;

     console.log(req.body);
    //console.log(idDepartamento, descripcion, idPais, idDistritoDep,idProvincia,idCanton);

     
    let globalS = new globalServices();

    const promise = globalS.consultaDB(database.actualizarDepartamento(idDepartamento,departamento,idPais,parseInt(idDistritoDep),idPronvincia,idCanton));

    await promise.then(result =>{
     res.json({
          ok:true,
     })
  }); 


}

const eliminarDepartamento = async(req, res = response) =>{

     const idDepartamento = req.params.idDepartamento;

     let globalS = new globalServices();

     const promise = globalS.consultaDB(database.deleteDepartamento(idDepartamento));

     await promise.then(result =>{
          res.json({
               ok:true,
          })
       }); 
}

module.exports = {
     getDepartamentos,
     crearDepartamento,
     actualizarDepartamento,
     eliminarDepartamento,
     getDepartamentoActualizar
}