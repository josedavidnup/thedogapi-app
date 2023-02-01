const { User, Dog } = require('../db');
const bcrypt = require('bcrypt');

const createUser = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hash });
  console.log(user);

  delete user.dataValues.password;
  return user;
};

const findByEmail = async (email) => {
  const userEmail = User.findOne({
    where: { email },
  });
  return userEmail;
};

module.exports = {
  createUser,
  findByEmail,
};
