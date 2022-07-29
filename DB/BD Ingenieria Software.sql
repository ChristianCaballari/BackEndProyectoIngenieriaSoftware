CREATE DATABASE proyectoIngenieria2
USE master
USE proyectoIngenieria2
GO

CREATE TABLE Sexo(
  idSexo TINYINT PRIMARY KEY,
  descripcion CHAR(1) NOT NULL  
);
GO
CREATE TABLE Pais(
  idPais TINYINT PRIMARY KEY IDENTITY(1,1),
  descripcion NVARCHAR(80) NOT NULL,
  iso CHAR(2) NOT NULL
);
GO
CREATE TABLE RespuestaLegal(
  idRespuesta SMALLINT PRIMARY KEY IDENTITY(1,1),
  descripcion NVARCHAR(70) NOT NULL
);

GO

CREATE TABLE Provincia(
  descripcion NVARCHAR(10) NOT NULL,
  idProvincia TINYINT PRIMARY KEY,
);


CREATE TABLE Canton(
  descripcion NVARCHAR(30) NOT NULL,
  compuesta NVARCHAR(10),
  idCanton INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
  idProvincia TINYINT NOT NULL,
  CONSTRAINT FK_CANTON_PROVINCIA FOREIGN KEY (idProvincia)
  REFERENCES Provincia(idProvincia)
);


CREATE TABLE Canton(
  descripcion NVARCHAR(30) NOT NULL,
  --compuesta NVARCHAR(10),
  idCanton NVARCHAR(10) PRIMARY KEY,
  idProvincia TINYINT NOT NULL,
  CONSTRAINT FK_CANTON_PROVINCIA FOREIGN KEY (idProvincia)
  REFERENCES Provincia(idProvincia)
);



GO
CREATE TABLE Distrito(
  descripcion VARCHAR(35) NOT NULL,
  idDistrito NVARCHAR(15)  NOT NULL,
  idCanton  NVARCHAR(10) NOT NULL,
  idProvincia  NVARCHAR(10) NOT NULL,
  idDistritoDep INT PRIMARY KEY IDENTITY(1,1)
 --compuesta NVARCHAR(10) NOT NULL,
  --CONSTRAINT FK_DISTRITO_CANTON FOREIGN KEY (idCanton)
  --REFERENCES Canton(idCanton)
);
GO
CREATE TABLE Departamento(
  idDepartamento TINYINT PRIMARY KEY IDENTITY(1,1),
  descripcion NVARCHAR(30) NOT NULL,
  idDistritoDep INT,
  idPais TINYINT NOT NULL,
  CONSTRAINT FK_Departamento_Pais FOREIGN KEY (idPais) 
  REFERENCES Pais(idPais),
  CONSTRAINT FK_Departamento_Distrito FOREIGN KEY (idDistritoDep) 
  REFERENCES Distrito(idDistritoDep)
);
CREATE TABLE Usuario(
  idUsuario INT PRIMARY KEY IDENTITY(1,1),
  nombre NVARCHAR(50) NOT NULL,
  apellidos NVARCHAR(80) NOT NULL,
  idSexo TINYINT NOT NULL,
  cedula NVARCHAR(9),
  foto NVARCHAR(MAX),
  fechaNacimiento DATE,
  idDepartamento TINYINT,
  correo NVARCHAR(30),
  celular NVARCHAR(20),
  rol NVARCHAR(20) default 'normal',
  CONSTRAINT FK_USUARIO_SEXO FOREIGN KEY (idSexo) REFERENCES
  Sexo(idSexo),
  CONSTRAINT FK_USUARIO_DEPARTAMENTO FOREIGN KEY (idDepartamento)
  REFERENCES Departamento(idDepartamento)
);
GO
CREATE TABLE Clasificador(
  idClasificador TINYINT PRIMARY KEY IDENTITY(1,1),
  descripcion NVARCHAR(100) NOT NULL
);

GO
CREATE TABLE Solicitud(
  idSolicitud INT PRIMARY KEY IDENTITY(1,1),
  fechaHora DATETIME,
  idUsuario INT,
  palabraClave NVARCHAR(30),
  asuntoDetallado NVARCHAR(60),
  cantidadCambios SMALLINT,
  idClasificador TINYINT,
  idRespuestaLegal SMALLINT,
  destalleRespuesta VARCHAR(70),
  fechaHoraRespuesta DATETIME ,
  idUsuarioRespuesta INT,
  cantidadArchivos TINYINT ,
  activo BIT,
  CONSTRAINT FK_SOLICITUD_USUARIO FOREIGN KEY (idUsuario) 
  REFERENCES Usuario(idUsuario),
  CONSTRAINT FK_SOLICITUD_CLASIFICADOR FOREIGN KEY (idClasificador) 
  REFERENCES Clasificador(idClasificador),
  CONSTRAINT FK_SOLICITUD_RESPUESTA_LEGAL FOREIGN KEY (idRespuestaLegal) 
  REFERENCES RespuestaLegal(idRespuesta),
  CONSTRAINT FK_SOLICITUD_USUARIO_R FOREIGN KEY (idUsuario) 
  REFERENCES Usuario(idUsuario),
);
GO
CREATE TABLE ArchivoSolicitud(
  idArchivoSolicitud SMALLINT PRIMARY KEY IDENTITY(1,1),
  linea TINYINT NOT NULL,
  archivo NVARCHAR(MAX) NOT NULL,
  comentario NVARCHAR(70) NOT NULL,
  idSolicitud INT,
  CONSTRAINT FK_SOLICITUD_ARCHIVO FOREIGN KEY (idSolicitud)
  REFERENCES Solicitud(idSolicitud)
);

USE MASTER;

SELECT * FROM Paises;
SELECT * FROM Sexo;
SELECT * FROM Canton;

INSERT INTO Sexo (idSexo,descripcion) VALUES(1,'M')
INSERT INTO Sexo (idSexo,descripcion) VALUES(2,'F')


INSERT INTO Clasificador (descripcion) VALUES('Consulta General');
INSERT INTO Clasificador (descripcion) VALUES('Contrato Provedores');
INSERT INTO Clasificador (descripcion) VALUES('Contrato Personal');
INSERT INTO Clasificador (descripcion) VALUES('Normativa o ley Internacional');
INSERT INTO Clasificador (descripcion) VALUES('Normativa o ley Nacional');