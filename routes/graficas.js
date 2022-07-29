/*
Ruta: /api/graficas
*/
const { Router } = require("express");
const { getDatosGraicasSinResponder,getCantidadRespuestaLegal  } = require("../controllers/graficasController");

const router = Router();

router.get("/", getDatosGraicasSinResponder);

router.get("/:idGrafica", getCantidadRespuestaLegal);



module.exports = router;
