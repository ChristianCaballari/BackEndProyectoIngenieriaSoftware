/*
Ruta: /api/solicitud
*/
const { Router } = require("express");
const {
  insertSolicitud,
  getSolicitudes,
  eliminarSolicitud,
  getSolicitudActualizar,
  actualizarSolicitud
} = require("../controllers/solicitudController");

const router = Router();

router.post("/:idUsuario", insertSolicitud);
router.get("/", getSolicitudes);
router.delete('/:idSolicitud',eliminarSolicitud);
router.get('/:idSolicitud',getSolicitudActualizar);
router.put('/:idSolicitud',actualizarSolicitud);


module.exports = router;
