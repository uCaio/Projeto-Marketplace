const { Cliente } = require("../config/db").models
const bcrypt = require("bcrypt");

const editarCadastro = async (req, res) => {
    const { id } = req.params;
    const { nome, telefone, email, senha } = req.body;

    if(!nome || !telefone || !email || !senha){
        return res.status(400).send("Todos os campos são obrigatórios.");
    }
    
    try {
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).send('<h2>Cliente não encontrado.</h2>');
        }

        // Nova senha criptografada
        const saltRounds = 10;
        const novaSenhaCriptografada = await bcrypt.hash(senha, saltRounds)

        await Cliente.update(
            { nome, telefone, email, senha: novaSenhaCriptografada }, { where: { clienteID: id } }
        )

        return res.redirect("/home")
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro no servidor.")
    }
}

module.exports = { editarCadastro }