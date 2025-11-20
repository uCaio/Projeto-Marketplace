const {Cliente} = require('../config/db').models
const {Produto} = require('../config/db').models


const exibirProdutosFemininos = async (req,res) => {
    try {
        let cliente = null;
        if (req.session.clienteId) {
            cliente = await Cliente.findByPk(req.session.clienteId);
        }
        const produtos = await Produto.findAll({where: {sexo: 'Feminino'}});
        res.render('womensPAge', {cliente, produtos})
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao carregar página.");
    }
}

module.exports = { exibirProdutosFemininos}