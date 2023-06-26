const Produit = require('../models/produit')

exports.createproduit = (req, res) => {
    const produit = new Produit({
      slug : req.body.slug,
      name : req.body.name,
      price : req.body.price
    });
    produit.save().then(
        () => {
            res.status(201).json({ 
                message: 'Produit enregistré !'
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

exports.getOneProduit= (req, res, next) => {
    Produit.findOne({ _slug: req.params.slug })
    .then(
        (produit) => {
          res.status(200).json(produit);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
    );
};

exports.modifyProduit = (req, res, next) => {
    const produit = new Produit({
        slug : req.body.slug,
        name : req.body.name,
        price : req.body.price
      });
    Produit.updateOne({ _slug: req.params.slug }, produit).then(
        () => {
            res.status(200).json(
                { message: 'Produit modifié avec succés !'
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

exports.deleteProduit = (req, res, next) => {
    Produit.deleteOne({ _slug: req.params.slug }).then(
        () => {
            res.status(200).json({ 
                message: 'Produit supprimé avec succés !'
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

exports.getAllProduit = (req, res, next) => {
    Produit.find().then(
        (produits) => {
            res.status(200).json(produits);
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
  };
