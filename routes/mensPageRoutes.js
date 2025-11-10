const express = require("express");
const router = express.Router();

const mensPageController = require('../controllers/mensPageController');

router.get('/masculino', mensPageController.exibirProdutosMasculinos)


module.exports = router;