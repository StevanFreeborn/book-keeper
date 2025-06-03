import { Sequelize } from "sequelize";

const dbPath = `${process.cwd()}/persistence/book_keeper_development.db`;

const db = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
});

await db.sync();

export { db };

