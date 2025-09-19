const {Cliente} = require("../config/db").models

const exibirLogin = (req,res)=>{
    const error = req.query.error || null;
    res.render('formLogin', {error})
}

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const clienteExistente = await Cliente.findOne({ where: { email } })
        if (!clienteExistente) {
            return res.redirect("/login?error=Credenciais inválidas");
        }
        if(clienteExistente.email !== email){
            return res.redirect("/login?error=Email ou senha inválidos");
        }

        if (clienteExistente.senha !== senha) {
            return res.redirect("/login?error=Email ou senha inválidos");
        }
        req.session.clienteId = clienteExistente.clienteID;
        res.redirect('/home');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro no servidor.")
    }
}

module.exports = {exibirLogin, login}