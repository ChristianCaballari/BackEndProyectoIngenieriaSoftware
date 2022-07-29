/*
Ruta: /api/paises
*/
const { Router } = require("express");
const { getSexo } = require("../controllers/sexoController");

const router = Router();

router.get("/", getSexo);

module.exports = router;