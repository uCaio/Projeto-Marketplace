const express = require("express");
const router = express.Router();

const womensPageController = require("../controllers/womensPageController")

router.get('/feminino', womensPageController.exibirProdutosFemininos)


module.exports = router;