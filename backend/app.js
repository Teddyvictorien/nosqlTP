const express = require('express');
const mongoose = require('mongoose');
const produitRoutes = require('./routes/produit');
const categorieRoutes = require('./routes/categorie');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect(`mongodb+srv://teddyvictoriendev:SwKcTeRmdcp4Kvfd@cluster0.1nzzkqx.mongodb.net/`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/produit', produitRoutes);
app.use('/categorie', categorieRoutes);

//Dans le cas d'utilisation de Redis
// j'aurais utilisé ce code afin de me connecté à ma db
// const redis = require('redis');
// const client = redis.createClient();  //par default redis.createClient() va utilisé 127.0.0.1 et 6379 acomme hostname et port

// client.on('connect', function() {
//   console.log('Connected!');
// });

module.exports = app;