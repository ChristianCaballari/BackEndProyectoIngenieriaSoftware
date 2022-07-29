
GO
CREATE PROC sp_getPaisesAS SET NOCOUNT ONBEGIN   SELECT descripcion, idPais,iso From Pais;ENDGO
ALTER PROC sp_getDistritosAS SET NOCOUNT ONBEGIN   SELECT DISTINCT(D.descripcion), D.idDistritoDep,P.descripcion AS Provincia FROM Distrito AS DINNER JOIN Provincia AS P ON  P.idProvincia=D.idProvinciaWHERE P.idProvincia = D.idProvincia; ENDGOSELECT * FROM Distrito;SELECT DISTINCT(D.descripcion), D.idDistritoDep,P.descripcion FROM Distrito AS DINNER JOIN Provincia AS P ON  P.idProvincia=D.idProvinciaWHERE P.idProvincia = D.idProvincia;GOCREATE PROC sp_InsertDepartamento(
     @descripcion NVARCHAR(30),
	 @idDistritoDep INT,
	 @idPais TINYINT
)
AS
SET NOCOUNT ON
BEGIN
   INSERT INTO Departamento(descripcion,idDistritoDep,idPais,activo)
   VALUES (@descripcion,@idDistritoDep,@idPais,1);
END
GO


ALTER PROC sp_DeleteDepartamento(
     @idDepartamento INT
)
AS
SET NOCOUNT ON
BEGIN
   UPDATE Departamento SET activo = 0 WHERE idDepartamento = @idDepartamento
END


GO
CREATE PROC sp_getDepartamentos
AS
SET NOCOUNT ON
BEGIN
   SELECT D.idDepartamento, D.descripcion, DIS.descripcion AS Distrito, P.descripcion AS Pais FROM Departamento AS D 
   INNER JOIN Pais AS P ON P.idPais = D.idPais
   INNER JOIN Distrito AS DIS ON DIS.idDistritoDep = D.idDistritoDep 
   WHERE D.activo =1
END


GO
CREATE PROC sp_getDepartamento(
    @idDepartamento INT
)
AS
SET NOCOUNT ON
BEGIN
   SELECT D.idDepartamento, D.descripcion, DIS.idDistritoDep, P.idPais FROM Departamento AS D 
   INNER JOIN Pais AS P ON P.idPais = D.idPais
   INNER JOIN Distrito AS DIS ON DIS.idDistritoDep = D.idDistritoDep 
   WHERE idDepartamento = @idDepartamento
END


USE proyectoIngenieria2
GO

ALTER PROC sp_actualizarDepartamento(
    @idDepartamento INT,
	@descripcion NVARCHAR(30),
	@idPais TINYINT,
	@idDistritoDep INT
)
AS
SET NOCOUNT ON
BEGIN
     UPDATE Departamento SET descripcion = @descripcion,
	 idDistritoDep = @idDistritoDep,
	 idPais = @idPais
	 WHERE idDepartamento = @idDepartamento 
END







SELECT * FROM Departamento;
SELECT * FROM Distrito;
SELECT * FROM Pais;


 UPDATE Departamento SET activo = 1 WHERE idDepartamento = 3


 -----------------------------------------------------------------------------------------------
 ---USUARIOS

 SELECT TOP 10 * FROM Usuario;

    SELECT D.idDepartamento, D.descripcion, DIS.idDistritoDep, P.idPais FROM Departamento AS D 
   INNER JOIN Pais AS P ON P.idPais = D.idPais
   INNER JOIN Distrito AS DIS ON DIS.idDistritoDep = D.idDistritoDep 
   WHERE idDepartamento = @idDepartamento

   SELECT * FROM CANTON
GO


ALTER PROC sp_getUsuarios
AS
SET NOCOUNT ON
BEGIN
--SELECT TOP(10) U.nombre, U.apellidos, U.cedula, U.rol, P.descripcion AS Pais,
--           Dis.descripcion AS Distrito, CAN.descripcion AS Canton, D.descripcion
--		   AS Departamento FROM Usuario AS U
--         INNER JOIN Departamento AS D ON D.idDepartamento = U.idDepartamento
--         INNER JOIN Pais AS P ON P.idPais = D.idPais
--          INNER JOIN Distrito AS DIS ON DIS.idDistritoDep = D.idDistritoDep
--          INNER JOIN Canton AS CAN ON CAN.idCanton = DIS.idCanton
--  WHERE U.activo = 1

 SELECT TOP(6) idUsuario, nombre, apellidos, cedula,rol, idDepartamento FROM Usuario
 WHERE activo = 1;
END
GO
  



CREATE PROC sp_DeleteUsuario(
     @idUsuario INT
)
AS
SET NOCOUNT ON
BEGIN
   UPDATE Usuario SET activo = 0 WHERE idUsuario = @idUsuario;
END




EXEC sp_getUsuarios
UPDATE Usuario SET idDepartamento = 1 WHERE idUsuario = 1
UPDATE Usuario SET activo = 1 WHERE idUsuario = 1


SELECT TOP(10) U.nombre, U.apellidos, U.cedula, U.rol
FROM usuario AS U
   WHERE U.cedula = '116590669'






    SELECT TOP 10 * FROM Usuario;
	
	SELECT * FROM Sexo;
GO

CREATE PROC sp_getSexo
AS
SET NOCOUNT ON

BEGIN
  SELECT idSexo, descripcion FROM Sexo;
END

EXEC sp_getSexo;


GO
ALTER PROC sp_usuarioEditar(@idUsuario INT)
AS
SET NOCOUNT ON

BEGIN
  SELECT U.idUsuario, U.nombre, U.apellidos, U.idSexo, U.cedula, CONVERT(VARCHAR,U.fechaNacimiento,23) 
         AS fechaVencimiento, U.idDepartamento, U.correo, U.celular,U.rol
         FROM Usuario AS U
		 WHERE U.idUsuario = @idUsuario;
END

EXEC sp_getSexo;