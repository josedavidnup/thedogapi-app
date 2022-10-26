const { Dog, Temperament } = require('../db');
const getApiDogs = require('./apiRequest.controller');

const getBreeds = async (name) => {
  try {
    const dbDogsResponse = await Dog.findAll({
      include: Temperament,
    });
    let dbDogs = dbDogsResponse.map((breed) => {
      return {
        id: breed.id,
        name: breed.name,
        height: breed.height,
        weight: breed.weight,
        life_span: breed.life_span,
        image: breed.image,
        temperaments: breed.temperaments
          .map((temperament) => {
            return temperament.name;
          })
          .join(', '),
      };
    });

    const apiDogsResponse = await getApiDogs();
    let apiDogs = apiDogsResponse.map((breed) => {
      return {
        id: breed.id,
        name: breed.name,
        height: breed.height.metric,
        weight: breed.weight.metric,
        life_span: breed.life_span,
        image: breed.image.url,
        temperaments: breed.temperament,
      };
    });
    let dogsMerge = apiDogs.concat(dbDogs);
    if (name) {
      return dogsMerge.filter((dog) =>
        dog.name.toLowerCase().includes(name.trim().toLowerCase())
      );
    }
    return dogsMerge;
  } catch (err) {
    next(err);
  }
};

/* const getDogByName = async (name) => {
  try {
    if (!name) {
      throw new Error('No mandaste nombre');
    }
    const allDogs = await getDogs();
    const apiDog = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(name.trim().toLowerCase())
    );
    if (!apiDog.length) {
      throw new Error(`Dog's name not found`);
    }
    return apiDog;
  } catch (err) {
    return {
      error: err.message,
    };
  }
}; */

const getBreedById = async (id) => {
  const allDogs = await getBreeds();
  const apiDog = allDogs.find((dog) => dog.id == id);
  if (!apiDog) {
    throw new Error(`Dog's id not found`);
  }
  return apiDog;
};

const createBreed = async (
  name,
  min_height,
  max_height,
  min_weight,
  max_weight,
  min_life_span,
  max_life_span,
  image
) => {
  const newBreed = await Dog.create({
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    min_life_span,
    max_life_span,
    image,
  });
  return newBreed;
};

const updateBreed = async (id) => {
  const allDogs = await getBreeds();
  const dog = allDogs.find((dog) => dog.id == id);
  await allDogs.filter((dog) => dog.id !== id);
  if (!dog) {
    throw new Error(`Dog's name not found`);
  }
  return `${dog.name} has been deleted`;
};

const deleteBreed = async (id) => {
  const apiDogsResponse = await getApiDogs();
  const dog = allDogs.findByPk((dog) => dog.id == id);
  if (dog) {
    await Dog.destroy({
      where: {
        id: id,
      },
    });
  } else if (apiDogsResponse.find((dog) => dog.id == id)) {
  }

  return `${dog.name} has been deleted`;
};

module.exports = {
  getBreeds,
  getBreedById,
  createBreed,
  updateBreed,
  deleteBreed,
  // getDogByName,
};

// {
//  img: img,
//  name: name,
//  height: `${minHeight} - ${maxHeight}` ,
//  weight: `${minWeight} - ${maxWeight}`,
//  age: `${minAge} - ${maxAge}`,
// }
