const { Router } = require('express');
const { createUser } = require('../controllers/user.controller');
const { checkApiKey } = require('../middlewares/auth.handler');
const { Dog } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/login', checkApiKey, async (req, res, next) => {
  const { name } = req.query;
  try {
    res.status(200).json('hola');
  } catch (error) {
    next(error);
  }
});

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
