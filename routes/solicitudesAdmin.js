/*
Ruta: /api/paises
*/
const { Router } = require("express");
const {
  getSolicitudesAdmin,
  actualizarSolicitudAdmin,
  insertarArchivoSolicitud,
  getCantidadCambioSolicitudAdmin,
} = require("../controllers/solicitudesAdminController");

const router = Router();

router.get("/", getSolicitudesAdmin);
router.get("/:idSolicitud", getCantidadCambioSolicitudAdmin);
router.post("/", actualizarSolicitudAdmin);
router.put("/:idSolicitud", insertarArchivoSolicitud);

module.exports = router;
