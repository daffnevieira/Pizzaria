import { Sequelize } from "sequelize";
import { mongoose } from "mongoose";

const conexao = new Sequelize("pedidos_clientes", "root", "admdaffne", {
    host: 'localhost',
    dialect: 'mysql',
})
// mongoose.connect('mongodb://localhost/pizzaria', function (error, db) {
//     console.log(error);
//     console.log(db);
// })
conexao.authenticate()
.then(()=> {
    console.log("Realizada com sucesso")
}).catch(error => {
    console.log("Conexão não realizada", error)
})


export default conexao;