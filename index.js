require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

//Lectura  y pareo del body
app.use(express.json({limit:"10mb"}));

// Rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/login", require("./routes/auth"));
app.use("/api/paises", require("./routes/paises"));
app.use("/api/distritos", require("./routes/distritos"));
app.use("/api/provincias", require("./routes/provincias"));
app.use("/api/cantones", require("./routes/cantones"));
app.use("/api/departamentos", require("./routes/departamentos"));
app.use("/api/archivosSolicitud", require("./routes/archivosSolicitud"));
app.use("/api/sexo", require("./routes/sexo"));

app.use("/api/graficas", require("./routes/graficas"));

app.use("/api/clasificador", require("./routes/clasificador"));
app.use("/api/solicitud", require("./routes/solicitud"));
app.use("/api/solicitudAdmin", require("./routes/solicitudesAdmin"));

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto : ", process.env.PORT);
});
