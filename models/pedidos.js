import { Sequelize } from "sequelize";
import conexao from "./db.js"

const user = conexao.define("pedidos_clientes", {
	id : {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				msg: "Esse campo não pode ser vazio"
			}
		}
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
	bebidas: {
		type: Sequelize.STRING,
		allowNull: true
	},
	obs: {
		type: Sequelize.STRING,
		allowNull: true
	},
	pgto: {
		type: Sequelize.STRING,
		allowNull: true 
	}
});


export default user;