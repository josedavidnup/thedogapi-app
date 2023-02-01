const { Router } = require('express');
const { createUser } = require('../controllers/user.controller');
const router = Router();

router.post('/signup', async (req, res, next) => {
  //   const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const newUser = await createUser(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
