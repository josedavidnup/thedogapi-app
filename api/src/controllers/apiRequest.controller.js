const axios = require('axios');

const getApiDogs = async () => {
  const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  return dogsApi.data;
};
module.exports = getApiDogs;
