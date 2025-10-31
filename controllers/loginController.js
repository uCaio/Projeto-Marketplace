const { Cliente } = require("../config/db").models
const bcrypt = require('bcrypt')

const exibirLogin = (req, res) => {
    const error = req.query.error || null;
    res.render('formLogin', { error })
}

const login = async (req, res) => {

    const { email, senha } = req.body;
    
    if (!email || !senha) {
        return res.redirect("/login?error=Preencha todos os campos.")
    }
    try{
        const clienteExistente = await Cliente.findOne({ where: { email } })
        if (!clienteExistente) {
            return res.redirect("/login?error=Credenciais inválidas.");
        }
        if (clienteExistente.email !== email) {
            return res.redirect("/login?error=Senha .");
        }
        const senhaCorreta = await bcrypt.compare(senha, clienteExistente.senha)

        if (!senhaCorreta) {
            return res.redirect("/login?error=Senha inválida.");
        }
        req.session.clienteId = clienteExistente.clienteID;
        res.redirect('/home');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro no servidor.")
    }
}

module.exports = { exibirLogin, login }