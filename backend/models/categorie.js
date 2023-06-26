const mongoose = require('mongoose');
const Produit = require('./produit')

const categorieSchema = mongoose.Schema({
  slug: { type: String, required: true, unique: true},
  name: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Produit"}]
});

module.exports = mongoose.model('Categorie', categorieSchema);