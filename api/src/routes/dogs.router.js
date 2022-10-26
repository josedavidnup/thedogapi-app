const { Router } = require('express');
const { Temperament } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {
  getBreeds,
  getBreedById,
  createBreed,
  updateBreed,
  deleteBreed,
  // getDogByName,
} = require('../controllers/dogs.controller');

router.get('/', async (req, res, next) => {
  const { name } = req.query;
  try {
    const dogsList = await getBreeds(name);
    res.status(200).json(dogsList);
  } catch (error) {
    next(error);
  }
});

/* router.get('/search', async (req, res, next) => {
  const { name } = req.query;
  try {
    const dog = await getDogByName(name);
    res.status(200).json(dog);
  } catch (error) {
    next(error);
  }
}); */

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const dog = await getBreedById(id);
    res.status(200).json(dog);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const {
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    min_life_span,
    max_life_span,
    image,
    temperaments,
  } = req.body;

  try {
    const newDog = await createBreed(
      name,
      min_height,
      max_height,
      min_weight,
      max_weight,
      min_life_span,
      max_life_span,
      image
    );
    const temp = await Temperament.findAll({
      where: { name: temperaments },
    });
    await newDog.addTemperaments(temp);
    res.status(200).json(newDog);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    min_life_span,
    max_life_span,
    image,
    temperaments,
  } = req.params;
  try {
    const dog = await updateBreed(
      id,
      name,
      min_height,
      max_height,
      min_weight,
      max_weight,
      min_life_span,
      max_life_span,
      image,
      temperaments
    );
    res
      .status(200)
      .json(dog && { message: `Breed has been updated successfully` });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const dog = await deleteBreed(id);
    res
      .status(200)
      .json(dog && { message: `Breed has been deleted successfully` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// {
//  img: img,
//  name: name,
//  height: `${minHeight} - ${maxHeight}` ,
//  weight: `${minWeight} - ${maxWeight}`,
//  age: `${minAge} - ${maxAge}`,
// }
