/*
Ruta: /api/cantones
*/
const { Router } = require("express");
const { getCantones } = require("../controllers/cantonesController");

const router = Router();

router.get("/:idProvincia", getCantones);

module.exports = router;