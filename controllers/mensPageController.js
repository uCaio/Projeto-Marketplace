const {Cliente} = require('../config/db').models
const {Produto} = require('../config/db').models

const exibirProdutosMasculinos = async (req,res) => {
    try {
        let cliente = null;
        if (req.session.clienteId) {
            cliente = await Cliente.findByPk(req.session.clienteId);
        }
        const produto = await Produto.findAll({where: {sexo: 'Masculino'}});
        res.render('mensPage', {cliente, produto})
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao carregar página.");
    }
}

module.exports = { exibirProdutosMasculinos}