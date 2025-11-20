const { Produto } = require('../config/db').models;
const { Cliente } = require('../config/db').models;
const { Compra  } = require('../config/db').models

const mostraCompras = async(req, res)=>{
    try {
        if(!req.session.clienteId){
            return res.redirect('/login')
        }

        const cliente = await Cliente.findByPk(req.session.clienteId,{
            include: {
                model: Compra,
                include: Produto,
            },
        });

        if(!cliente){
            return res.redirect('/login')
        }

        const compras = cliente?.Compras || [];

        res.render('myPurchase', {cliente, compras})
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao carregar compras')
    }
}

module.exports = {mostraCompras}