const router = require('express').Router();

const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      Product,
      {
        model: Product,
        attributes: ['id','product_name', 'price','stock','category_id']
        
      }
    ]

  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id:req.params.id
    },
    attributes: [
      'id',
      'category_name'

    ],
    include: [
      Product,
      {
        model: Product,
        attributes: ['id','product_name', 'price','stock','category_id']
        
      }
    ]
   
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({message: 'No Category found with that id.'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    // pass an id and name
    id: req.body.id,
    category_name: req.body.category_name

  })
  .then(dbCategoryData => {
    res.json(dbCategoryData);
  })
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    // update the category name
    category_name: req.body.category_name
  },
  {
    where: {
      id:req.params.id
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData){
      res.status(404).json({ message: 'No category found with this id.'});
      return;
    }
    res.json(dbCategoryData + " Category updated.");
  })
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'No Category with that id.'});
      return;
    }
    res.json(dbCategoryData + " Deleted Category.");
  })
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
