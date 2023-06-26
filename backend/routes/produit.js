const express = require('express');
const router = express.Router();

const produitController = require('../controllers/produit');

router.get('/', produitController.getAllProduit);
router.post('/', produitController.createproduit);
router.get('/:slug', produitController.getOneProduit);
router.put('/:slug', produitController.modifyProduit);
router.delete('/:slug', produitController.deleteProduit);

module.exports = router;