const express = require('express');
const router = express.Router();

const categorieController = require('../controllers/categorie');

router.get('/', categorieController.getAllCategorie);
router.post('/', categorieController.createCategorie);
router.put('/:slug', categorieController.modifyCategorie);
router.get('/:slug', categorieController.getOneCategorie);
router.delete('/:slug', categorieController.deleteCategorie);
router.put('/associate/:slug', categorieController.associateCategorie)

module.exports = router;