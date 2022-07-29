
DECLARE @numero_pagina INT = 1;
DECLARE @registros_porPagina INT= 50;

SELECT * FROM Usuario AS U
ORDER BY U.idUsuario ASC
OFFSET 0 ROWS
FETCH NEXT 10 ROWS ONLY

SELECT * FROM Usuario AS U
ORDER BY U.idUsuario ASC
OFFSET @numero_pagina ROWS
FETCH NEXT @registros_porPagina ROWS ONLY

GO
ALTER PROC sp_getUsuariosPaginado(
@numero_pagina INT
)
AS
SET NOCOUNT ON
DECLARE @registros_porPagina INT = 6;
BEGIN
   SELECT idUsuario,nombre, apellidos, idSexo, cedula, fechaNacimiento, correo, celular, rol, foto FROM Usuario AS U
       ORDER BY U.idUsuario ASC
        OFFSET (@numero_pagina -1) * 
		@registros_porPagina ROWS
   FETCH NEXT @registros_porPagina ROWS ONLY
END
GO


EXEC sp_getUsuariosPaginado 1;

EXEC sp_getUsuariosPaginado 50;

SELECT * FROM Usuario
SELECT * FROM Departamento

SELECT  * FROM usuario WHERE cedula = 116590669

UPDATE Usuario SET correo = 'christianccm17@gmail.com', celular = '86240261', rol ='ADMIN-USER', contrasenia = (PWDENCRYPT('123456'))
WHERE cedula = 116590669;

INSERT INTO EncargadoSistema (rol, nombre, apellido, [password], email) 
VALUES ('USER-ROL','Pedro','Herrera', (PWDENCRYPT('123456')),'Pedro.com')

UPDATE  EncargadoSistema SET rol = 'ADMIN-ROL';
SELECT * FROM EncargadoSistema;

CREATE PROC [dbo].[sp_login](@password VARCHAR(70),@email VARCHAR(30))AS SET NOCOUNT ON	IF EXISTS (SELECT E.idEncargado FROM EncargadoSistema  AS E WHERE email=@email AND PWDCOMPARE(@password, E.[password])=1)      SELECT idEncargado, nombre, apellido, rol 	      FROM EncargadoSistema AS E	  WHERE E.email=@email AND PWDCOMPARE(@password, E.[password])=1	 ELSESELECT 0 AS resultado;


EXEC sp_login '123456', 'christianccm17@gmail.com'


SELECT * FROM EncargadoSistema;

SELECT * FROM Solicitud

SELECT SO.fechaHora, SO.asuntoDetallado, CL.descripcion FROM Solicitud SO
INNER JOIN Clasificador AS CL 
ON CL.idClasificador = SO.idClasificador
WHERE SO.idUsuario =2 AND SO.activo = 1






SELECT * FROM Usuario WHERE nombre = 'Christian'

ALTER PROC sp_InsertUsuario(
     @nombre NVARCHAR(50), @apellidos NVARCHAR(80), @idSexo TINYINT, @cedula NVARCHAR(9),
	 @foto NVARCHAR(MAX), @fechaNacimiento DATE, @idDepartamento TINYINT, @correo NVARCHAR(30),
	 @celular NVARCHAR(20),@contrasenia NVARCHAR(30)
)
AS
DECLARE @pass VARBINARY(MAX);
DECLARE @fec DATE;
SET @fec = CONVERT(Date,@fechaNacimiento,23);
SET NOCOUNT ON
BEGIN
SET @pass=(PWDENCRYPT(@contrasenia))
   INSERT INTO Usuario (nombre, apellidos, idSexo,cedula, foto, fechaNacimiento, idDepartamento,correo, celular, rol,contrasenia,activo)
   VALUES (@nombre, @apellidos, @idsexo, @cedula, @foto, @fec, @idDepartamento, @correo, @celular,'USER-ROL',@pass ,'1')
END



SELECT * FROM Usuario

SELECT  nombre, MAX(idUsuario) FROM Usuario


ALTER PROC sp_actualizarUsuario(
     @idUsuario INT,
     @nombre NVARCHAR(50), @apellidos NVARCHAR(80), @idSexo TINYINT, @cedula NVARCHAR(9),
	 @foto NVARCHAR(MAX), @fechaNacimiento DATE, @idDepartamento TINYINT, @correo NVARCHAR(30),
	 @celular NVARCHAR(20),@contrasenia NVARCHAR(30)
)
AS

DECLARE @fec DATE;
SET @fec = CONVERT(Date,@fechaNacimiento,23);
SET NOCOUNT ON
BEGIN
DECLARE @pass VARBINARY(MAX);
SET @pass=(PWDENCRYPT(@contrasenia))
   UPDATE  Usuario SET nombre = @nombre, apellidos = @apellidos, idSexo = @idSexo, cedula = @cedula,
   foto = @foto, fechaNacimiento = @fec, idDepartamento =@idDepartamento, correo = @correo, 
   celular= @celular,contrasenia = @pass
   WHERE idUsuario = @idUsuario;   
END


CREATE PROC sp_actualizarRol(
     @idUsuario INT, @rol NVARCHAR(20)
)
AS
SET NOCOUNT ON
BEGIN
   UPDATE Usuario SET rol = @rol 
   WHERE idUsuario = @idUsuario
END

CREATE PROC sp_getClasificador
AS
SET NOCOUNT ON
BEGIN
   SELECT idClasificador, descripcion FROM Clasificador
END



Select GETDATE() as [GETDATE]

CREATE PROC sp_InsertSolicitud(
    @idUsuario INT, @palabraClave NVARCHAR(30), @asuntoDetallado NVARCHAR(60), @idClasificador TINYINT
)
AS

SET NOCOUNT ON
BEGIN
   INSERT INTO Solicitud (fechaHora,idUsuario, palabraClave, asuntoDetallado, idClasificador,activo)
   VALUES (GETDATE(), @idUsuario,@palabraClave, @asuntoDetallado, @idClasificador, '1')
END


ALTER PROC sp_getSolicitudes
AS
SET NOCOUNT ON
BEGIN
SELECT idSolicitud,CONVERT(varchar,S.fechaHora,20) AS fechaHora, S.asuntoDetallado, C.descripcion FROM Solicitud AS SINNER JOIN Clasificador AS CON C.idClasificador = S.idClasificadorWHERE S.activo = 1;
END





CREATE PROC sp_DeleteSolicitud(@idSolicitud INT)
AS
SET NOCOUNT ON
BEGIN
UPDATE Solicitud SET activo = '0'
WHERE idSolicitud = @idSolicitud;
END


CREATE PROC sp_getSolicitudActualizar(@idSolicitud INT)
AS
SET NOCOUNT ON
BEGIN
SELECT palabraClave, idClasificador, asuntoDetallado FROM Solicitud
WHERE idSolicitud = @idSolicitud;
END

USE proyectoIngenieria2

CREATE PROC sp_updateSolicitud(@idSolicitud INT, @palabraClave NVARCHAR(30),
@asuntoDetallado NVARCHAR(60), @idClasificador TINYINT)
AS
SET NOCOUNT ON
BEGIN
   UPDATE Solicitud SET palabraClave = @palabraClave, asuntoDetallado = @asuntoDetallado, 
           idClasificador = @idClasificador
	WHERE idSolicitud = @idSolicitud;
END







SELECT  nombre, apellidos FROM Usuario
WHERE idUsuario = 3000000

ALTER TABLE EncargadoSistema ADD  foto NVARCHAR(MAX)


SELECT * FROM Solicitud;SELECT * FROM EncargadoSistema;SELECT * FROM RespuestaLegal;ALTER PROC sp_getSolicitudesUsuariosAS
SET NOCOUNT ON
BEGINSELECT DISTINCT(S.idUsuario), E.nombre AS nombreUsuario, E.apellido AS apellidoUsuario,
               E.foto, E.rol,
               (SELECT COUNT( idUsuario )
               FROM Solicitud
           WHERE idRespuestaLegal  IS NULL) AS solicitudesSinRespuesta         FROM EncargadoSistema AS E      INNER JOIN Solicitud as S   ON E.idEncargado = S.idUsuarioWHERE S.activo = 1ENDEXEC sp_getSolicitudesUsuariosCREATE PROC sp_updateSolicitudAdmin(@idSolicitud INT,@idUsuarioRespuesta INT ,@detalleRespuesta VARCHAR(70))AS
SET NOCOUNT ON
BEGIN UPDATE Solicitud SET destalleRespuesta = @detalleRespuesta, idUsuarioRespuesta = @idUsuarioRespuesta,  idRespuestaLegal = 2,fechaHoraRespuesta = GETDATE()WHERE idSolicitud = @idSolicitudENDUSE MASTERGOALTER PROC sp_InsertArchivoSolicitud(
    @idSolicitud INT, @archivo NVARCHAR(MAX), @comentario NVARCHAR(70)
)
AS
SET NOCOUNT ON
BEGIN
   INSERT INTO ArchivoSolicitud(linea,archivo,comentario, idSolicitud)
   VALUES (1,@archivo, @comentario,  @idSolicitud)
END


SELECT * FROM ArchivoSolicitud

GO
CREATE PROC sp_getProvincias
AS
SET NOCOUNT ON
BEGIN
     SELECT idProvincia, descripcion FROM Provincia
END

GO
CREATE PROC sp_getCantones(@idProvincia TINYINT)
AS
SET NOCOUNT ON
BEGIN
    SELECT C.idCanton, C.descripcion FROM Provincia AS P
	INNER JOIN Canton AS C
	ON P.idProvincia = C.idProvincia
	WHERE P.idProvincia = @idProvincia
END

EXEC sp_getCantones 7

GO
CREATE PROC sp_getDistritosPorCanton(@idCanton NVARCHAR(10))
AS
SET NOCOUNT ON
BEGIN
     SELECT D.idDistrito, D.descripcion FROM Canton AS C
	 INNER JOIN Distrito AS D
	 ON C.idCanton = D.idCanton
	 WHERE @idCanton = C.idCanton
END

SELECT * FROM Canton

EXEC sp_getDistritosPorCanton 702

SELECT TOP(12) * FROM Usuario WHERE cedula = 116590669

UPDATE Usuario SET contrasenia=(PWDENCRYPT('123456'))
 WHERE idUsuario = 4


