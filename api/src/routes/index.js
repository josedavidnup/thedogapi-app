const { Router } = require('express');
const { checkApiKey } = require('../middlewares/auth.handler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const dogsRouter = require('./dogs.router');
const temperamentRouter = require('./temperament.router');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/auth', authRouter);

router.use('/user', userRouter);

router.use('/dogs', dogsRouter);

router.use('/temperaments', temperamentRouter);

module.exports = router;
