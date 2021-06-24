const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');


// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll({}).then(products => res.json(products));
});

// create new product
router.post('/', (req, res) => {
  // create
  /* req.body should look like this...
    {
      product_name: "Lillan West",
      image_link: "https://dy9ihb9itgy3g.cloudfront.net/products/3356/66176/66176___d_f.740.jpg",
      store_link: "https://www.suzannesbridalboutique.com/lillian-west/spring-2021/66169",
      list_id: 1
    }
  */
    Product.create(req.body).then(product => { 
      console.log(product)
      res.json(product);
    }).catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(product => res.json(product));
});

module.exports = router;
