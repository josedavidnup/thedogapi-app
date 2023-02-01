const { Strategy } = require('passport-local');
const { findByEmail } = require('../../controllers/user.controller');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await findByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
