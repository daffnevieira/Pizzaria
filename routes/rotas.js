/* eslint-disable linebreak-style */
import express from "express";
import user from "../models/pedidos.js";

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/menu", (req, res) => {
  res.sendFile('menu.html', { root: 'client' });
});

router.get("/pedido", (req, res) => {
  res.sendFile('pedido.html', { root: 'client' });
}); 

router.get("/andamento", (req, res) => {
  res.sendFile('andamento.html', { root: 'client' });
});

router.post("/pedidos", async (req, res) => {
  const { nome, tamanho, salgada, sobremesa, borda, bebidas, obs, pgto } = req.body;
  
  if (!nome) {
    return res.status(400).json({ mensagem: "O nome do cliente é obrigatório." });
  } if (!pgto) {
    return res.status(400).json({ mensagem: "A forma de pagamento não pode estar vazia!" });
  }

  try {
    await user.create({
      nome,
      tamanho,
      salgada,
      sobremesa,
      borda,
      bebidas,
      obs,
      pgto
    });
    
  
    res.send("Pedido adicionado ao sistema!");
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensagem: "Erro ao adicionar o pedido." }
    
    );
  }
});

export default router;
