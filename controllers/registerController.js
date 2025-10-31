const { Cliente } = require("../config/db").models
const bcrypt = require('bcrypt')

const exibeFormCadastro = (req, res) => {
    res.render("formRegister")
}

const cadastroCliente = async (req, res) => {
    const { nome, cpf, telefone, email, senha, data_nascimento } = req.body;

    if (!nome || !cpf || !telefone || !email || !senha || !data_nascimento) {
        return res.send("Todos os campos são obrigatórios.");
    }

    try {
        const clienteExistente = await Cliente.findOne({ where: { cpf } })
        if (clienteExistente) {
            return res.send("Cliente já existe.")
        } else {
            const saltRounds = 10;
            const senhaCriptografada = await bcrypt.hash(senha, saltRounds);
            const novoCliente = await Cliente.create({ nome, cpf, telefone, email, senha: senhaCriptografada, data_nascimento });
            req.session.clienteId = novoCliente.clienteID;
            res.redirect('/home');
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro no servidor.")
    }
}

module.exports = { exibeFormCadastro, cadastroCliente }