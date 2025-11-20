const { Produto, Estoque, Cliente, Compra } = require('../config/db').models;

let carrinho = [];

const mostrarCarrinho = async (req, res) => {
    try {
        if (!req.session.clienteId) return res.redirect("/login");

        const cliente = await Cliente.findByPk(req.session.clienteId);
        if (!cliente) return res.redirect("/login");

        return res.render('shoppingCart', { carrinho, cliente, Produto, Estoque });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao carregar o carrinho.");
    }
};

const adicionarAoCarrinho = async (req, res) => {
    try {
        const { produtoId } = req.params;
        const { tamanho } = req.body;

        const produto = await Produto.findByPk(produtoId);
        if (!produto) {
            return res.status(404).send("Produto não encontrado.");
        }

        const estoque = await Estoque.findOne({ where: { produtoID: produtoId } });
        if (!estoque || estoque.quantidade <= 0) {
            return res.status(400).send("Produto fora de estoque.");
        }

        const imagemPrincipal = produto.imagens ? produto.imagens.split(',')[0] : "sem-imagem-disponivel.jpg";

        // Verifica se já existe no carrinho com mesmo ID e tamanho
        const itemExistente = carrinho.find(item => item.id == produto.produtoID && item.tamanho === tamanho);

        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.push({
                id: produto.produtoID,
                nome: produto.nome,
                preco: produto.preco_pix, // padronizei como 'preco'
                tamanho: tamanho,
                pasta_imagem: produto.pasta_imagens,
                imagem: imagemPrincipal,
                quantidade: 1,
            });
        }

        return res.redirect('/carrinho');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao adicionar item ao carrinho.");
    }
};

const confirmarCompra = async (req, res) => {
    try {
        if (!req.session.clienteId) return res.redirect('/login');

        const cliente = await Cliente.findByPk(req.session.clienteId);
        if (!cliente) return res.redirect('/login');

        if (carrinho.length === 0) {
            return res.status(400).send("O carrinho está vazio.");
        }

        // Verifica estoque
        for (let item of carrinho) {
            const estoque = await Estoque.findOne({ where: { produtoID: item.id } });
            if (!estoque || estoque.quantidade < item.quantidade) {
                return res.status(400).send(`Estoque insuficiente para o produto: ${item.nome}`);
            }
        }

        // Desconta estoque
        for (let item of carrinho) {
            const estoque = await Estoque.findOne({ where: { produtoID: item.id } });
            estoque.quantidade -= item.quantidade;
            await estoque.save();
        }

        // Adiciona compras
        for (let item of carrinho) {
            await Compra.create({
                clienteID: cliente.clienteID,
                produtoID: item.id,
                quantidade: item.quantidade,
                tamanho: item.tamanho,
                preco: item.preco
            });
        }

        // Limpa o carrinho
        carrinho = [];

        return res.render("purchaseCompleted", { cliente });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao confirmar compra.");
    }
};

const atualizarQuantidade = (req, res) => {
    try {
        const { produtoId, novaQuantidade } = req.body;
        const item = carrinho.find(item => item.id == produtoId);

        if (!item) {
            return res.status(404).send("Item não encontrado no carrinho.");
        }

        item.quantidade = parseInt(novaQuantidade, 10);
        if (isNaN(item.quantidade) || item.quantidade < 0) {
            return res.status(400).send("Quantidade inválida.");
        }
        if (item.quantidade === 0) {
            carrinho = carrinho.filter(i => i.id != produtoId || i.tamanho !== item.tamanho);
        }

        let totalProdutos = 0;
        carrinho.forEach(p => {
            const precoNum = parseFloat(p.preco) || 0;
            totalProdutos += precoNum * p.quantidade;
        });

        return res.json({
            sucesso: true,
            totalProdutos: totalProdutos.toFixed(2)
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao atualizar quantidade.");
    }
};

const calcularFrete = (req, res) => {
    try {
        const { cep } = req.body;

        const valorFrete = Math.random() * 50;

        const totalProdutos = carrinho.reduce((total, item) => {
            const precoNum = parseFloat(item.preco) || 0;
            return total + (precoNum * item.quantidade);
        }, 0);

        const totalComFrete = totalProdutos + valorFrete;

        return res.json({
            sucesso: true,
            valorFrete: valorFrete.toFixed(2),
            totalComFrete: totalComFrete.toFixed(2)
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao calcular frete");
    }
};

const removerItem = (req, res) => {
    try {
        const { produtoId, tamanho } = req.params;
        carrinho = carrinho.filter(item => !(item.id == produtoId && item.tamanho == tamanho));
        return res.redirect('/carrinho');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao remover item.");
    }
};

const limparCarrinho = (req, res) => {
    try {
        carrinho = [];
        return res.redirect('/carrinho');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao limpar carrinho.");
    }
};

module.exports = {
    mostrarCarrinho,
    adicionarAoCarrinho,
    atualizarQuantidade,
    removerItem,
    limparCarrinho,
    confirmarCompra,
    calcularFrete,
};
