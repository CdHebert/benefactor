const router = require('express').Router();
const {  User, Friend, UserFriend } = require('../../models');

// Find all friends
// get all users
router.get('/friends', (req, res) => {
    // find all users
    // be sure to include its associated Lists and Friends
    
    Friend.findAll(
      {
        attributes: { exclude: ['password'] },
        order: [['friend_id', 'ASC']],
        include: [
          {
            model: User,
            through: UserFriend,
            attributes: { exclude: ['password'] },
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

router.post('/friends', (req, res) => {
    // expects { friend_id: 2, user_id: 3 }

    // Find the friend to be added if he/she exists 
    // in the user's table by using the 'friend_id'
    User.findOne(
        {
            where: {
                id: req.body.friend_id
            },
            attributes: ['username'],
        }
    )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            // If the friend was found in the users
            Friend.create({
                user_id: req.body.user_id,
                friend_name: dbUserData.username
            })
                .then(dbUserData => res.json(dbUserData))
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;