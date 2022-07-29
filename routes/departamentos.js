/*
Ruta: /api/departamentos
*/ 
const  { Router } = require('express');
const  { check } = require('express-validator')
const { getDepartamentos, crearDepartamento, eliminarDepartamento, actualizarDepartamento, getDepartamentoActualizar } = require('../controllers/departamentosController'); 
const { validarCampos } = require('../middleware/validarCampos');

const router = Router();

router.get('/',getDepartamentos);

router.get('/:idDepartamento',getDepartamentoActualizar);

router.post('/',
    //   [
    //   check('descripcion','La descripcion es Obligatoria').not().isEmpty(),
    //   check('idPais','El Pais es oblligatorio').not().isEmpty(),
    //   check('idDistritoDep','El Distrito es Obligatorio ').not().isEmpty(),
    //   validarCampos,
    //   ],
     crearDepartamento
    );

router.delete('/:idDepartamento',eliminarDepartamento);

router.put('/editar/:idDepartamento',actualizarDepartamento);

module.exports = router;