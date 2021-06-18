const router = require('express').Router();
const { List } = require('../../models');

// The `/api/lists` endpoint

router.get('/', (req, res) => {
  // find all lists
  // be sure to include its associated Products
  List.findAll({}).then(lists => res.json(lists));
});

module.exports = router;
