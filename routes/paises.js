/*
Ruta: /api/paises
*/
const { Router } = require("express");
const { getPaises,getDatosUsuarioGrafica } = require("../controllers/paisesController");

const router = Router();

router.get("/", getPaises);
router.get("/:idGrafica", getDatosUsuarioGrafica);

module.exports = router;
