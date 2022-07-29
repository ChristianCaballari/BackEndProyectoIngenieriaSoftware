/*
Ruta: /api/clasificador
*/
const { Router } = require("express");
const { getClasificadores,getCantidadSolictudPorClasificador } = require('../controllers/clasificadorController');

const router = Router();

router.get('/',getClasificadores);

router.get("/:idGrafica", getCantidadSolictudPorClasificador);
module.exports = router;