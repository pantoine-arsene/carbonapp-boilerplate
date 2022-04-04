import { Sequelize } from 'sequelize-typescript';

const HOST = 'localhost';
const PORT = 5432;
const PG_USERNAME = 'postgres';
const PG_PWD = 'docker';

export const db = new Sequelize({
  host: HOST,
  username: PG_USERNAME,
  password: PG_PWD,
  dialect: "postgres",
  database: "carbonapp",
  port: PORT,
  models: [`${__dirname}/models`],
  logging: false
});

export async function onStartup() {
  console.log("Connecting to '" + HOST + "' on port " + PORT + " || 5432")
  console.log("Waiting for db connection")
  await db.authenticate()
      .then(() => {
          console.log('Connection to database has been established successfully.');
      })
      .catch(err => {
          console.error('Unable to connect to the database:', err);
      });
  // await db.sync({force: true, }) // - If you need to apply non-retrocompatible changes (will clear the db)
  await db.sync({alter: true})
}

