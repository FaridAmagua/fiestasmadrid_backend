import { Sequelize } from "sequelize";

const sequelize = new Sequelize('FiestasMadrid', 'root', 'root', {
  host: 'localhost', // Reemplaza esto con el nombre del contenedor del servicio PostgreSQL en Docker
  port: 5433, // Puerto predeterminado de PostgreSQL
  dialect: 'postgres',
  dialectOptions: {
    // Aquí puedes agregar opciones adicionales si es necesario
  }
});

export default sequelize;
