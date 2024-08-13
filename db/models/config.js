import dotenv from 'dotenv';
dotenv.config();

export default {
  'database': process.env.DATABASE,
  'user': 'root',
  'password': process.env.PASSWORD,
  'host': 'localhost',
  'dialect': process.env.DB_DIALECT,
};