require('dotenv').config();

// Exporta um objeto com as variáveis de ambiente carregadas
module.exports = {
  'database': process.env.DATABASE,
  'user': 'root',
  'password': process.env.PASSWORD,
  'host': 'localhost',
  'dialect': process.env.DB_DIALECT,
};