const { Router } = require('express');
const { Temperament } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getTemperaments } = require('../controllers/temperaments.controller');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req, res, next) => {
  try {
    let temperaments = await Temperament.findAll({
      attributes: ['name'],
    });
    if (!temperaments.length) {
      temperaments = temperaments = await getTemperaments();
      temperaments.forEach((name) => {
        Temperament.create({ name: name });
      });
    } else {
      temperaments = temperaments.map((name) => name.name);
    }
    res.status(200).json(temperaments);
  } catch (error) {
    next();
    // res.status(400).json({ error: error.message });
  }
});

module.exports = router;
