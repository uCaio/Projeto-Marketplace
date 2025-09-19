const {Cliente} = require("../config/db").models

const exibeFormCadastro = (req,res)=>{
    res.render("formRegister")
}

const cadastroCliente = async (req, res) => {
    try {
        const {nome, cpf, telefone, email, senha, data_nascimento} = req.body;
        const clienteExistente = await Cliente.findOne({ where: { cpf } })
        if (clienteExistente) {
            return res.send("Cliente já existe.")
        } else {
            const novoCliente = await Cliente.create({ nome, cpf, telefone, email, senha, data_nascimento });
            req.session.clienteId = novoCliente.clienteID;
            res.redirect('/home');   
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro no servidor.")
    }
}



module.exports = {exibeFormCadastro, cadastroCliente}