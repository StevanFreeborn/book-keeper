import { DataTypes } from "sequelize";
import { db } from "./db";

export const Book = db.define('books', {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
});
