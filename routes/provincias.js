/*
Ruta: /api/provincias
*/
const { Router } = require("express");
const { getProvincias } = require("../controllers/provinciasController");

const router = Router();

router.get("/", getProvincias);

module.exports = router;