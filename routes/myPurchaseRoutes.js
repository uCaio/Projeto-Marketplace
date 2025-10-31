const express = require("express")
const router = express.Router()

const compraController = require('../controllers/myPurchaseController');

router.get('/minhasCompras', compraController.mostraCompras)

module.exports = router;