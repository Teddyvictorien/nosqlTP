const Categorie = require('../models/categorie');
const Produit = require('../models/produit')

exports.createCategorie = (req, res) => {
    const categorie = new Categorie({
      slug : req.body.slug,
      name : req.body.name,
      products : req.body.products
    });
    categorie.save().then(
        () => {
            res.status(201).json({ 
                message: 'Categorie enregistré !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
  };

exports.getOneCategorie= (req, res, next) => {
    Categorie.findOne({ slug: req.params.slug })
    .populate('products')
    .then(
        (categorie) => {
          res.status(200).json(categorie);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
    );
};

exports.modifyCategorie = (req, res, next) => {
    const categorie = new Categorie({
        slug : req.body.slug,
        name : req.body.name
      });
    Categorie.updateOne({ _slug: req.params.slug }, categorie).then(
        () => {
            res.status(200).json(
                { message: 'Categorie modifié avec succés !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
  };

exports.deleteCategorie = (req, res, next) => {
    Categorie.deleteOne({ slug: req.params.slug }).then(
        () => {
            res.status(200).json({ 
                message: 'Categorie supprimé avec succés !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
};

exports.getAllCategorie = (req, res, next) => {
    Categorie.find()
    .then(
        (categories) => {
            res.status(200).json(categories);
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
  };


  exports.associateCategorie = (req, res, next) => {
    const categorie = new Categorie({
        slug : req.body.slug,
        name : req.body.name,
        products : req.body.products
      });
    Categorie.updateOne({ slug: req.params.slug }, categorie).then(
        () => {
            res.status(200).json(
                { message: 'Categorie modifié avec succés !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
  };