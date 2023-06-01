/* eslint-disable linebreak-style */
import express from "express";
import bodyParser from 'body-parser';
const BodyParser = bodyParser;
 
import user from "../models/pedidos.js";
const router = express.Router();

router.use(BodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.get("/menu", (req, res) => {
	res.sendFile('menu.html', { root: 'client' });

});

router.get("/pedido", (req, res) => {
	res.sendFile('pedido.html', { root: 'client' });

}); 

router.get("/andamento", (req, res) => {

	res.sendFile('andamento.html', { root: 'client' });
});

router.post("/pedidos", bodyParser.json(), async (req, res) => {
	const { nome, pgto } = req.body;
  
	if (!nome) {
	  return res.status(400).json({ mensagem: "O nome do cliente é obrigatório." });
	} else if (!pgto) {
	  return res.status(400).json({ mensagem: "A forma de pagamento não pode estar vazia!" });
	}
  
	try {
	  await user.create({
		id: req.body.id,
		nome: req.body.nome,
		tamanho: req.body.tamanho,
		saborSalgado: req.body.saborSalgado,
		sobremesa: req.body.sobremesa,
		borda: req.body.borda,
		bebidas: req.body.bebidas,
		obs: req.body.obs,
		pgto: req.body.pgto
	  });
  
	  res.send("Pedido adicionado ao sistema!");
	} catch (error) {
	  res.status(500).json({ mensagem: "Erro ao adicionar o pedido." });
	}
  });

export default router;