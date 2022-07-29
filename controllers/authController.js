const { response } = require("express");
const { generarJWT } = require("../helpers/jwt");
const database = require('../database/index');
const authServices = require('../services/authServices');

const login = async (req, res = response) => {
  const { email, password } = req.body;
  
  let d = new authServices();

  console.log(req.body);
 
  const promise =  d.credenciales(database.login(password,email));
  
  const {idUsuario, nombre, apellidos, rol, foto  } = await promise.then(result => result[0]);

  console.log(nombre, apellidos, foto, rol);
 
   if(idUsuario === undefined){
      res .status(200).json({ok: false,msg: "El Usuario no existe", noValido: "No" });
   }else{ 
   //Generar JWT
   try{
      const token = await generarJWT(idUsuario);
       res.json({
           ok: true,
          msg: {'id':idUsuario,'nombre':nombre,'apellido':apellidos,'rol':rol,'token':token, 'foto':foto},
    });
  } catch (error) {
      console.log(error);
      res.status(500).json({
      ok: false,
      msg: "Hubo un error",
    });
    }
  }
};
module.exports = {
  login,
};
