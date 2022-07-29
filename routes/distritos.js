/*
Ruta: /api/distritos
*/
const { Router } = require("express");
const { getDistritosPorCanton ,getDistritos } = require("../controllers/distritosController");

const router = Router();

router.get("/", getDistritos);

router.get("/:idCanton", getDistritosPorCanton);

module.exports = router;
