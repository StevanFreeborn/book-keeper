import { Sequelize } from "sequelize";

export const db = new Sequelize({
  dialect: 'sqlite',
  storage: './book_keeper_development.db'
});

