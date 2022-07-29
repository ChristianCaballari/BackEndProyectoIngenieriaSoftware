/*
Ruta: /api/usuarios
*/
const { Router } = require("express");
const { check } = require("express-validator");
const {
  getUsuarios,
  crearUsuarios,
  eliminarUsuario,
  getUsuarioEditar,
  actualizarUsuario,
  actualizarRolUsuario
} = require("../controllers/usuariosController");
//const { actualizarUsuario } = require("../database");
const { validarCampos } = require("../middleware/validarCampos");

const router = Router();

router.get("/", getUsuarios);

router.delete("/:idUsuario", eliminarUsuario);

router.get('/:idUsuario',getUsuarioEditar);

//router.get('/:pagina',getUsuariosPaginados);

router.put('/:idUsuario',actualizarUsuario)

router.put('/',actualizarRolUsuario)

router.post(
  "/",
  // [
  //   check("nombre", "El nombre es Obligatorio ").not().isEmpty(),
  //   check("password", "La password es Obligatorio ").not().isEmpty(),
  //   check("email", "El email es Obligatorio ").isEmail(),
  //   validarCampos,
  // ],
  crearUsuarios
);
module.exports = router;
