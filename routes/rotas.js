/* eslint-disable linebreak-style */
import express from "express";
import user from "../db/models/pedidos.js";

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.post('/pedidos', async (req, res) => {
  const { nome, tamanho, saborSalgado, sobremesa, borda, bebida, obs, pgto } = req.body;
  const bebidaString = Array.isArray(bebida) ? bebida.join(', ') : bebida;

  if (!nome) {
    return res.status(400).json({ mensagem: "O nome do cliente é obrigatório." });
  } 
  if (!pgto) {
    return res.status(400).json({ mensagem: "A forma de pagamento não pode estar vazia!" });
  }

  try {
    const newUser = await user.create({
      nome,
      tamanho,
      saborSalgado,
      sobremesa,
      borda,
      bebida: bebidaString,
      obs,
      pgto
    });
    console.log('Pedido criado com sucesso:', newUser);
    setTimeout(async () => {
        
      await user.destroy({ where: { id: newUser.id } });
    
    }, 30 * 1000); 
    res.render('andamento', { dados: newUser.dataValues });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensagem: "Erro ao adicionar o pedido." });
  }
});
  
export default router;
