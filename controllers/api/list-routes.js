const router = require('express').Router();
const { List, Product } = require('../../models');

// The `/api/lists` endpoint


router.get('/', (req, res) => {
  // find all lists
  // be sure to include its associated Products
  List.findAll({
    include: [Product]
  }).then(lists => res.json(lists)).catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  // find one
  // be sure to include its associated Products
  List.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(lists => res.json(lists)).catch(err => res.json(err))
});

router.post('/', (req, res) => {
  // create
    List.create(req.body).then(lists => res.json(lists)).catch(err => res.json(err))
});

// update list
router.put('/:list:listId', (req, res, next) => {
  List.update (
    {list_name: req.body.list_name},
    {returning: true, where: {id: req.params.listId} }
  )
  .then(function([ rowsUpdate, [updatedList] ]) {
    res.json(updatedList)
  })
  .catch(next)
 })

  // delete list
  const deleteList = async (req, res) => {
    try {
      const { listId } = req.params;
      const deleted = await models.List.destroy({
        where: { id: listId }
      });
      if (deleted) {
        return res.status(204).send("List deleted");
      }
      throw new Error("List not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };



module.exports = router;
