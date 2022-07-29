const db_conection = require("../database/config");
class authServices {
  constructor() {}

  credenciales = async (consulta) => {
    let data;
    try {
      await db_conection.sql
        .connect(db_conection.sqlDBConnetion)
        .then(() => {
          return db_conection.sql.query(consulta);
        })
        .then((result) => {
          data = result.recordsets[0];
        })
        .then(() => {
          console.log("Conexion cerrada");
          return db_conection.sql.close();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
    return data;
  };
}

module.exports = authServices;
