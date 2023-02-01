const { User, Dog } = require('../db');
const bcrypt = require('bcrypt');

const createUser = async (data) => {
  console.log(data);
  const hash = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hash });
  console.log(user);

  delete user.dataValues.password;
  return user;
};

module.exports = {
  createUser,
};
