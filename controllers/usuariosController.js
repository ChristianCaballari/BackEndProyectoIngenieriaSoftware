const { response } = require("express");
const bcrypt = require("bcryptjs");
const database = require("../database/index");
const globalServices = require("../services/globalService");

const getUsuarios = async (req, res) => {
  let pagina = req.query.pagina;

  console.log(pagina);
  let globalS = new globalServices();

  const promise = globalS.consultaDB(database.getUsuariosPaginados(pagina));

  await promise.then((result) => {
    res.json({
      ok: true,
      msg: result,
    });
  });
};

const getUsuariosPaginados = async (req, res) => {
  let pagina = req.query.pagina;

  console.log(pagina);

  let globalS = new globalServices();

  const promise = globalS.consultaDB(database.getUsuariosPaginados(pagina));

  await promise.then((result) => {
    res.json({
      ok: true,
      msg: result,
    });
  });
};

const crearUsuarios = async (req, res = response) => {
  const {
    nombre,
    apellidos,
    idSexo,
    cedula,
    idDepartamento,
    fechaVencimiento,
    correo,
    celular,
    password,
    foto,
  } = req.body;

  //console.log(req.body);

  let globalS = new globalServices();

  const promise = globalS.consultaDB(
    database.crearUsuario(
      nombre,
      apellidos,
      idSexo,
      cedula,
      foto,
      fechaVencimiento,
      idDepartamento,
      correo,
      celular,
      password
    )
  );

  await promise.then((result) => {
    res.json({
      ok: true,
      msg: "Usuario Insertado Correctamente",
    });
  });
};

const actualizarUsuario = async (req, res = response) => {
  const {
    nombre,
    apellidos,
    idSexo,
    cedula,
    idDepartamento,
    fechaVencimiento,
    correo,
    celular,
    password,
    foto,
  } = req.body;

  console.log(req.body);

  const idUsuario = req.params.idUsuario;
  //console.log(req.body);
  let globalS = new globalServices();

  const promise = globalS.consultaDB(
    database.actualizarUsuario(
      idUsuario,
      nombre,
      apellidos,
      idSexo,
      cedula,
      foto,
      fechaVencimiento,
      idDepartamento,
      correo,
      celular,
      password
    )
  );

  await promise.then((result) => {
    res.json({
      ok: true,
      msg: "Usuario actualizado Correctamente",
    });
  });
};

const actualizarRolUsuario = async(req, res = response) =>{

     const { idUsuario, rol  } = req.body;

    let globalS = new globalServices();

    const promise = globalS.consultaDB(database.actualizarRolUsuario(idUsuario,rol));

   await promise.then(result =>{
     res.json({
          ok:true,
          msg: 'Rol actualizado correctamente'
     })
}); 
     
}

const eliminarUsuario = async (req, res = response) => {
  const idUsuario = req.params.idUsuario;

  let globalS = new globalServices();

  const promise = globalS.consultaDB(database.eliminarUsuario(idUsuario));

  await promise.then((result) => {
    res.json({
      ok: true,
    });
  });
};

const getUsuarioEditar = async (req, res = response) => {
  const idUsuario = req.params.idUsuario;

  let globalS = new globalServices();

  const promise = globalS.consultaDB(database.getUsuarioEditar(idUsuario));

  await promise.then((result) => {
    res.json({
      ok: true,
      msg: result,
    });
  });
};

module.exports = {
  getUsuarios,
  crearUsuarios,
  eliminarUsuario,
  getUsuarioEditar,
  getUsuariosPaginados,
  actualizarUsuario,
  actualizarRolUsuario
};
