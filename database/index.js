
const login = (password, email) => {
     console.log(password, email);
     return `EXEC [dbo].[sp_login] @password =N'${password}',@email =N'${email}'`;
}
const paises = () => {

     return `EXEC [dbo].[sp_getPaises]`;
     
}
const distritos = () => {

     return `EXEC [dbo].[sp_getDistritos]`;    
}

const insertarDepartamento = (descripcion,idPais,idDistritoDep,idProvincia, idCanton) =>{
     return `EXEC [dbo].[sp_InsertDepartamento] @descripcion =N'${descripcion}',@idDistritoDep =N'${idDistritoDep}',@idPais =N'${idPais}',@idProvincia =N'${idProvincia}',@idCanton =N'${idCanton}'`;
}

const getDepartamentos = () =>{

     return `EXEC [dbo].[sp_getDepartamentos]`; 
}

const deleteDepartamento = (idDepartamento) =>{
     
     return `EXEC [dbo].[sp_DeleteDepartamento] @idDepartamento =N'${idDepartamento}'`; 
}

const getDepartamento = (idDepartamento) =>{
     
     return `EXEC [dbo].[sp_getDepartamento] @idDepartamento =N'${idDepartamento}'`; 
}

const actualizarDepartamento = (idDepartamento,descripcion,idPais,idDistritoDep,idProvincia,idCanton) =>{
     
     console.log(idDepartamento, descripcion,idPais,idDistritoDep,idProvincia,idCanton);

     return `EXEC [dbo].[sp_actualizarDepartamento] @idDepartamento =N'${idDepartamento}', @descripcion =N'${descripcion}', @idPais =N'${idPais}',@idDistritoDep =N'${idDistritoDep}',@idProvincia =N'${idProvincia}',@idCanton =N'${idCanton}'`; 
}


///////Usuarios
const getUsuarios = () =>{

     return `EXEC [dbo].[sp_getUsuarios]`; 
}

const getUsuariosPaginados = (pagina) =>{

     return `EXEC [dbo].[sp_getUsuariosPaginado] @numero_pagina =N'${pagina}'`; 
}

const eliminarUsuario = (idUsuario) =>{
     
     return `EXEC [dbo].[sp_DeleteUsuario] @idUsuario =N'${idUsuario}'`; 
}




const getUsuarioEditar = (idUsuario) =>{
     
     return `EXEC [dbo].[sp_usuarioEditar] @idUsuario =N'${idUsuario}'`; 
}

const crearUsuario = (nombre, apellidos,
     idSexo,cedula,foto,fechaVencimiento,idDepartamento,correo,celular,password) => {
     return `EXEC [dbo].[sp_InsertUsuario] @nombre =N'${nombre}', @apellidos =N'${apellidos}',
     @idSexo =N'${idSexo}', @cedula =N'${cedula}', @foto =N'${foto}', @fechaNacimiento =N'${fechaVencimiento}',
     @idDepartamento =N'${idDepartamento}',@correo =N'${correo}', @celular =N'${celular}', @contrasenia =N'${password}'`; 
}


const actualizarUsuario = (idUsuario,nombre, apellidos,
     idSexo,cedula,foto,fechaVencimiento,idDepartamento,correo,celular,password) => {
     return `EXEC [dbo].[sp_actualizarUsuario] @idUsuario =N'${idUsuario}', @nombre =N'${nombre}', @apellidos =N'${apellidos}',
     @idSexo =N'${idSexo}', @cedula =N'${cedula}', @foto =N'${foto}', @fechaNacimiento =N'${fechaVencimiento}',
     @idDepartamento =N'${idDepartamento}',@correo =N'${correo}', @celular =N'${celular}', @contrasenia =N'${password}'`; 
}

const actualizarRolUsuario = (idUsuario,rol) => {
     return `EXEC [dbo].[sp_actualizarRol] @idUsuario =N'${idUsuario}', @rol =N'${rol}'`; 
}
/// SEXO 
const getSexo = () =>{

     return `EXEC [dbo].[sp_getSexo]`; 
}


//Clasificador
const getClasificadores = () =>{
     return `EXEC [dbo].[sp_getClasificador]`;
}


// Solicitudes
const insertarSolicitud = (idUsuario,palabraClave,asuntoDetallado,idClasificador) =>{
     return `EXEC [dbo].[sp_InsertSolicitud] @idUsuario =N'${idUsuario}', @palabraClave =N'${palabraClave}',@asuntoDetallado =N'${asuntoDetallado}', @idClasificador =N'${idClasificador}'`;
}

const getSolicitudes = (idUsuario) =>{
     return `EXEC [dbo].[sp_getSolicitudes] @idUsuario =N'${idUsuario}'`;
}

const eliminarSolicitud = (idSolicitud) =>{
     return `EXEC [dbo].[sp_DeleteSolicitud] @idSolicitud =N'${idSolicitud}'`; 
}

const getSolicitudActualizar = (idSolicitud) =>{
     
     return `EXEC [dbo].[sp_getSolicitudActualizar] @idSolicitud =N'${idSolicitud}'`; 
}

const actualizarSolicitud = (idSolicitud, palabraClave, asuntoDetallado, idClasificador)=>{
     return `EXEC [dbo].[sp_updateSolicitud] @idSolicitud =N'${idSolicitud}',
     @palabraClave =N'${palabraClave}',@asuntoDetallado =N'${asuntoDetallado}',@idClasificador =N'${idClasificador}'`; 
}



//Solicitudes Admin

const getSolicitudesAdmin = () =>{

     return `EXEC [dbo].[sp_getSolicitudesUsuarios]`; 
}
const getCantidadCambioSolicitud = (idSolicitud) =>{
     
     return `EXEC [dbo].[sp_CantidadCambioSolicitud] @idSolicitud =N'${idSolicitud}'`; 
}
const actualizarSolicitudAdmin = (idSolicitud, idUsuarioRespuesta, detalleRespuesta,idRespuestaLegal)=>{
     return `EXEC [dbo].[sp_updateSolicitudAdmin] @idSolicitud =N'${idSolicitud}',
     @idUsuarioRespuesta =N'${idUsuarioRespuesta}',@detalleRespuesta =N'${detalleRespuesta}', @idRespuestaLegal =N'${idRespuestaLegal}'`; 
}

const insertarArchivoSolicitudAdmin = (idSolicitud, archivo, comentario, nombre,tipo)=>{
     return `EXEC [dbo].[sp_InsertArchivoSolicitud] @idSolicitud =N'${idSolicitud}',
     @archivo =N'${archivo}',@comentario =N'${comentario}', @nombre =N'${nombre}',
     @tipo =N'${tipo}'`; 
}

// Provincias

const provincias = () => {

     return `EXEC [dbo].[sp_getProvincias]`;    
}

// Cantones por Por Provincias

const cantones = (idProvincia) => {

     return `EXEC [dbo].[sp_getCantones] @idProvincia =N'${idProvincia}'`;    
}

//Distritos por canton

const distritosPorCanton = (idCanton) => {

     return `EXEC [dbo].[sp_getDistritosPorCanton] @idCanton =N'${idCanton}'`;    
}

// Archivos por solicitud
const getArchivosPorSolicitud = (idSolicitud) =>{

     return `EXEC [dbo].[sp_getArchivoPorSolicitud] @idSolicitud =N'${idSolicitud}'`; 
}
// Archivos por solicitud
const getArchivosPorSolicitudDownload= (idArchivoSolicitud) =>{

     return `EXEC [dbo].[sp_getArchivoPorSolicitudDownload] @idArchivoSolicitud =N'${idArchivoSolicitud}'`; 
}


// Graficas

const solicitudesSinResponder = () => {

     return `EXEC [dbo].[sp_GraficaSolicitudSinReponder]`;    
}

const cantidadRespuestaLegal = () =>{

     return `EXEC [dbo].[sp_cantidadRespuestaLegal]`;  
  
}

const CantidadSolictudPorClasificador = () =>{

     return `EXEC [dbo].[sp_CantidadSolictudPorClasificador]`;     
}

const getDatosUsuarioGrafica = () =>{

     return `EXEC [dbo].[sp_getDatosUsuarioGrafica]`;     
}

module.exports = {
     login,
     paises,
     distritos,
     insertarDepartamento,
     getDepartamentos,
     deleteDepartamento,
     getDepartamento,
     actualizarDepartamento,

     ///Usuarios
     getUsuarios,
     eliminarUsuario,
     getUsuarioEditar,
     getUsuariosPaginados,
     crearUsuario,
     actualizarUsuario,
     actualizarRolUsuario,
     getSexo,

     // Clasificadores
     getClasificadores,

     //Solicitud
     insertarSolicitud,
     getSolicitudes,
     eliminarSolicitud,
     getSolicitudActualizar,
     actualizarSolicitud,

     //Solicitud Admin
     getSolicitudesAdmin,
     actualizarSolicitudAdmin,
     insertarArchivoSolicitudAdmin,
     getCantidadCambioSolicitud,

     //Provincias
     provincias,

     //Cantones
     cantones,

     //Distritos
     distritosPorCanton,

     //archivosPorSolicitud
     getArchivosPorSolicitud,

     getArchivosPorSolicitudDownload,

     // Graficas
     solicitudesSinResponder,
     cantidadRespuestaLegal,
     CantidadSolictudPorClasificador,
     getDatosUsuarioGrafica
}
