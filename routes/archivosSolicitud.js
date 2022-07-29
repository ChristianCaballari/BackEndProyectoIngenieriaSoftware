/*
Ruta: /api/archivoSolicitud
*/
const { Router } = require("express");
const { getArchivosPorSolicitud, getArchivosPorSolicitudDownload } = require("../controllers/archivosSolicitudController");

const router = Router();

router.get("/:idSolicitud", getArchivosPorSolicitud);
router.post("/", getArchivosPorSolicitudDownload);

module.exports = router;