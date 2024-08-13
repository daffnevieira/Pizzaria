import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate()
.then(()=> {
    console.log("Realizada com sucesso")
}).catch(error => {
    console.log("Conexão não realizada", error)
})


export default sequelize;