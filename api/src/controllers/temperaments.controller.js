const getApiDogs = require('./apiRequest.controller');
const { Temperament } = require('../db');

const getTemperaments = async () => {
  try {
    const apiDogsResponse = await getApiDogs();
    const temperamentList = [];
    apiDogsResponse.forEach((e) => {
      let filter = e.temperament?.split(', ');
      filter?.forEach((t) => {
        !temperamentList.includes(t) && temperamentList.push(t);
      });
    });
    return temperamentList;
  } catch (error) {}
};

module.exports = {
  getTemperaments,
};

// let temperamentList = await getTemperaments();
//   let id = 0;
//   temperamentList = temperamentList.map((temperament) => {
//     return {
//       name: temperament,
//     };
//   });
//   console.log(temperamentList);
//   // await Temperament.bulkCreate(temperamentList);
