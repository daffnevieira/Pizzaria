import { Sequelize } from "sequelize";
import sequelize from "./db.js"
import dotenv from 'dotenv';
dotenv.config();

const user = sequelize.define(process.env.TABLE, {
	id : {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: true,
		primaryKey: true
	},
	nome: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	tamanho: {
		type: Sequelize.STRING,
		allowNull: true
	},
	saborSalgado: {
		type: Sequelize.STRING,
		allowNull: true
	},
	sobremesa: {
		type: Sequelize.STRING,
		allowNull: true
	},
	borda: {
		type: Sequelize.STRING,
		allowNull: true
	},
	bebida: {
		type: Sequelize.STRING,
		allowNull: true
	},
	obs: {
		type: Sequelize.STRING,
		allowNull: true
	},
	pgto: {
		type: Sequelize.STRING,
		allowNull: true,
		validate: {
			notEmpty: {
				msg: "Esse campo não pode ser vazio"
			}
		}
	}
});
sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar modelos:', err);
});


export default user;