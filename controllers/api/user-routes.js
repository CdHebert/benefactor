const router = require('express').Router();
const { User, List, Friend, Product, UserFriend } = require('../../models');

// The `/api/users` endpoint

// get all users
router.get('/', (req, res) => {
  // find all users
  // be sure to include its associated Lists and Friends
  
  User.findAll(
    {
      attributes: { exclude: ['password'] },
      order: [['user_id', 'ASC']],
      include: [
        {
          model: List,
          include: [Product]
        },
        {
          model: Friend,
          through: UserFriend
        },
      ]
    }
  )
  .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one user
router.get('/:id', (req, res) => {
  // find a single user by its `id`
  // be sure to include its associated Lists and Friends
  User.findOne(
    {
      where: {
        user_id: req.params.id
      },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: List,
          include: [Product]
        },
        Friend,
      ]
    }
  )
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create new user
router.post('/', (req, res) => {
    
  /* 
    req.body should look like this...
    {
      username: "Jane",
      password: "ps343ds"
    }
  */
    User.create(req.body)
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.user_id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/login', (req, res) => {
  // expects {username: 'lernantino', password: 'password1234'}
  User.findOne({
    where: {
      username: req.body.username,
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.user_id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// Update a user
router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', password: 'password1234', friend_id: 3}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      user_id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      user_id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
