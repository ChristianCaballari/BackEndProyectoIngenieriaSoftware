

CREATE PROCEDURE sp_loadAS SET NOCOUNT ONBEGIN   INSERT INTO Pais  SELECT descripcion, iso FROM Paises;END

EXEC sp_load;
GO
CREATE PROCEDURE sp_insertSexoAS SET NOCOUNT ONBEGIN   INSERT INTO SEXO VALUES (1,'M');   INSERT INTO SEXO VALUES (0,'H');END

EXEC sp_insertSexo;
GO

